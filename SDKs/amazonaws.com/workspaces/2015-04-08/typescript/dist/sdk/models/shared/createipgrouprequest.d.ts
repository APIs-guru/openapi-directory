import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { IpRuleItem } from "./ipruleitem";
export declare class CreateIpGroupRequest extends SpeakeasyBase {
    groupDesc?: string;
    groupName: string;
    tags?: Tag[];
    userRules?: IpRuleItem[];
}
