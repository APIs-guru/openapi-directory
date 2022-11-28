import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WafAction } from "./wafaction";
import { ExcludedRule } from "./excludedrule";
import { WafOverrideAction } from "./wafoverrideaction";
import { WafRuleTypeEnum } from "./wafruletypeenum";



// ActivatedRule
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The <code>ActivatedRule</code> object in an <a>UpdateWebACL</a> request specifies a <code>Rule</code> that you want to insert or delete, the priority of the <code>Rule</code> in the <code>WebACL</code>, and the action that you want AWS WAF to take when a web request matches the <code>Rule</code> (<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>).</p> <p>To specify whether to insert or delete a <code>Rule</code>, use the <code>Action</code> parameter in the <a>WebACLUpdate</a> data type.</p>
**/
export class ActivatedRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: WafAction;

  @SpeakeasyMetadata({ data: "json, name=ExcludedRules", elemType: ExcludedRule })
  excludedRules?: ExcludedRule[];

  @SpeakeasyMetadata({ data: "json, name=OverrideAction" })
  overrideAction?: WafOverrideAction;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: WafRuleTypeEnum;
}
