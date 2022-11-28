import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemFilterKeyEnum } from "./opsitemfilterkeyenum";
import { OpsItemFilterOperatorEnum } from "./opsitemfilteroperatorenum";
/**
 * Describes an OpsItem filter.
**/
export declare class OpsItemFilter extends SpeakeasyBase {
    key: OpsItemFilterKeyEnum;
    operator: OpsItemFilterOperatorEnum;
    values: string[];
}
