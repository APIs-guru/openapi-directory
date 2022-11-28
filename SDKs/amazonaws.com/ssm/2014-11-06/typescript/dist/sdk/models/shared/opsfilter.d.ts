import { SpeakeasyBase } from "../../../internal/utils";
import { OpsFilterOperatorTypeEnum } from "./opsfilteroperatortypeenum";
/**
 * A filter for viewing OpsData summaries.
**/
export declare class OpsFilter extends SpeakeasyBase {
    key: string;
    type?: OpsFilterOperatorTypeEnum;
    values: string[];
}
