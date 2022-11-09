import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WafOverrideActionTypeEnum } from "./wafoverrideactiontypeenum";
/**
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The action to take if any rule within the <code>RuleGroup</code> matches a request. </p>
**/
export declare class WafOverrideAction extends SpeakeasyBase {
    type: WafOverrideActionTypeEnum;
}
