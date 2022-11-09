import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateRuleRequest extends SpeakeasyBase {
    changeToken: string;
    metricName: string;
    name: string;
    tags?: Tag[];
}
