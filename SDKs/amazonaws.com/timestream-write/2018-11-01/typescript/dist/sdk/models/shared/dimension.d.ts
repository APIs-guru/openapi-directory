import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueTypeEnum } from "./dimensionvaluetypeenum";
/**
 * Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
**/
export declare class Dimension extends SpeakeasyBase {
    dimensionValueType?: DimensionValueTypeEnum;
    name: string;
    value: string;
}
