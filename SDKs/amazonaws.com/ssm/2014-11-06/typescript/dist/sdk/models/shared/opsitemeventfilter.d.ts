import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemEventFilterKeyEnum } from "./opsitemeventfilterkeyenum";
import { OpsItemEventFilterOperatorEnum } from "./opsitemeventfilteroperatorenum";
/**
 * Describes a filter for a specific list of OpsItem events. You can filter event information by using tags. You specify tags by using a key-value pair mapping.
**/
export declare class OpsItemEventFilter extends SpeakeasyBase {
    key: OpsItemEventFilterKeyEnum;
    operator: OpsItemEventFilterOperatorEnum;
    values: string[];
}
