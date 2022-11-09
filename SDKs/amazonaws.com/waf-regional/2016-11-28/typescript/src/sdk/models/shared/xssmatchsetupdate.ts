import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangeActionEnum } from "./changeactionenum";
import { XssMatchTuple } from "./xssmatchtuple";


// XssMatchSetUpdate
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the part of a web request that you want to inspect for cross-site scripting attacks and indicates whether you want to add the specification to an <a>XssMatchSet</a> or delete it from an <code>XssMatchSet</code>.</p>
**/
export class XssMatchSetUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: ChangeActionEnum;

  @Metadata({ data: "json, name=XssMatchTuple" })
  xssMatchTuple: XssMatchTuple;
}
