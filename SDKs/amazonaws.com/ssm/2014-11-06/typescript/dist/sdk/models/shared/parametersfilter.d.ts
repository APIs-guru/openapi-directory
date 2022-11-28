import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersFilterKeyEnum } from "./parametersfilterkeyenum";
/**
 * This data type is deprecated. Instead, use <a>ParameterStringFilter</a>.
**/
export declare class ParametersFilter extends SpeakeasyBase {
    key: ParametersFilterKeyEnum;
    values: string[];
}
