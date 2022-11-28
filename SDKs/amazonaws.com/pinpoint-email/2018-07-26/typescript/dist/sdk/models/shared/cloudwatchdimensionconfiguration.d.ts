import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueSourceEnum } from "./dimensionvaluesourceenum";
/**
 * An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.
**/
export declare class CloudWatchDimensionConfiguration extends SpeakeasyBase {
    defaultDimensionValue: string;
    dimensionName: string;
    dimensionValueSource: DimensionValueSourceEnum;
}
