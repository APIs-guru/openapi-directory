import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueSourceEnum } from "./dimensionvaluesourceenum";



// CloudWatchDimensionConfiguration
/** 
 * An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
**/
export class CloudWatchDimensionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultDimensionValue" })
  defaultDimensionValue: string;

  @SpeakeasyMetadata({ data: "json, name=DimensionName" })
  dimensionName: string;

  @SpeakeasyMetadata({ data: "json, name=DimensionValueSource" })
  dimensionValueSource: DimensionValueSourceEnum;
}
