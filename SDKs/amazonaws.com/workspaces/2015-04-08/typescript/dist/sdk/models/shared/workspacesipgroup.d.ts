import { SpeakeasyBase } from "../../../internal/utils";
import { IpRuleItem } from "./ipruleitem";
/**
 * Describes an IP access control group.
**/
export declare class WorkspacesIpGroup extends SpeakeasyBase {
    groupDesc?: string;
    groupId?: string;
    groupName?: string;
    userRules?: IpRuleItem[];
}
