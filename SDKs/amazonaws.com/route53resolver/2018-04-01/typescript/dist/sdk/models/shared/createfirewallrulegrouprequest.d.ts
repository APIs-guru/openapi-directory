import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateFirewallRuleGroupRequest extends SpeakeasyBase {
    creatorRequestId: string;
    name: string;
    tags?: Tag[];
}
