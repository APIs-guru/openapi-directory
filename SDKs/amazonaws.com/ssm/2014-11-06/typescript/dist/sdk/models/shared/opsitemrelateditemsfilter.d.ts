import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemRelatedItemsFilterKeyEnum } from "./opsitemrelateditemsfilterkeyenum";
import { OpsItemRelatedItemsFilterOperatorEnum } from "./opsitemrelateditemsfilteroperatorenum";
/**
 * Describes a filter for a specific list of related-item resources.
**/
export declare class OpsItemRelatedItemsFilter extends SpeakeasyBase {
    key: OpsItemRelatedItemsFilterKeyEnum;
    operator: OpsItemRelatedItemsFilterOperatorEnum;
    values: string[];
}
