import { SpeakeasyBase } from "../../../internal/utils";
import { IpRuleItem } from "./ipruleitem";
export declare class AuthorizeIpRulesRequest extends SpeakeasyBase {
    groupId: string;
    userRules: IpRuleItem[];
}
