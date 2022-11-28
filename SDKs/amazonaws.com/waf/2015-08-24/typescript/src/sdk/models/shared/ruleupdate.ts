import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangeActionEnum } from "./changeactionenum";
import { Predicate } from "./predicate";



// RuleUpdate
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies a <code>Predicate</code> (such as an <code>IPSet</code>) and indicates whether you want to add it to a <code>Rule</code> or delete it from a <code>Rule</code>.</p>
**/
export class RuleUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: ChangeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Predicate" })
  predicate: Predicate;
}
