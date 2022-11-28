import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateRuleGroupRequest extends SpeakeasyBase {
    changeToken: string;
    metricName: string;
    name: string;
    tags?: Tag[];
}
