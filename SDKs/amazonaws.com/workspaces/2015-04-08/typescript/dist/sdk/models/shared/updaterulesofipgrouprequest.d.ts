import { SpeakeasyBase } from "../../../internal/utils";
import { IpRuleItem } from "./ipruleitem";
export declare class UpdateRulesOfIpGroupRequest extends SpeakeasyBase {
    groupId: string;
    userRules: IpRuleItem[];
}
