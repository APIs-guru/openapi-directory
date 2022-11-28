import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionTypeEnum } from "./dimensiontypeenum";
/**
 * Specifies the dimension type and values for a segment dimension.
**/
export declare class SetDimension extends SpeakeasyBase {
    dimensionType?: DimensionTypeEnum;
    values: string[];
}
