import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpHeader } from "./httpheader";



// HttpRequest
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes an <code>HTTPRequest</code> complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests that were returned by <code>GetSampledRequests</code>. </p>
**/
export class HttpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientIP" })
  clientIp?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=HTTPVersion" })
  httpVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Headers", elemType: HttpHeader })
  headers?: HttpHeader[];

  @SpeakeasyMetadata({ data: "json, name=Method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=URI" })
  uri?: string;
}
