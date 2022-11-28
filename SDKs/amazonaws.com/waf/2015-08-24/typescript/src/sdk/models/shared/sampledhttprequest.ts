import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpRequest } from "./httprequest";



// SampledHttpRequest
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The response from a <a>GetSampledRequests</a> request includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains one <code>SampledHTTPRequest</code> object for each web request that is returned by <code>GetSampledRequests</code>.</p>
**/
export class SampledHttpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=Request" })
  request: HttpRequest;

  @SpeakeasyMetadata({ data: "json, name=RuleWithinRuleGroup" })
  ruleWithinRuleGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Weight" })
  weight: number;
}
