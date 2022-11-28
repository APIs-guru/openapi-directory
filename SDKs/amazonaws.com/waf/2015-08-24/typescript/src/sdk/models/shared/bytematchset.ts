import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchTuple } from "./bytematchtuple";



// ByteMatchSet
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>In a <a>GetByteMatchSet</a> request, <code>ByteMatchSet</code> is a complex type that contains the <code>ByteMatchSetId</code> and <code>Name</code> of a <code>ByteMatchSet</code>, and the values that you specified when you updated the <code>ByteMatchSet</code>. </p> <p>A complex type that contains <code>ByteMatchTuple</code> objects, which specify the parts of web requests that you want AWS WAF to inspect and the values that you want AWS WAF to search for. If a <code>ByteMatchSet</code> contains more than one <code>ByteMatchTuple</code> object, a request needs to match the settings in only one <code>ByteMatchTuple</code> to be considered a match.</p>
**/
export class ByteMatchSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ByteMatchSetId" })
  byteMatchSetId: string;

  @SpeakeasyMetadata({ data: "json, name=ByteMatchTuples", elemType: ByteMatchTuple })
  byteMatchTuples: ByteMatchTuple[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
