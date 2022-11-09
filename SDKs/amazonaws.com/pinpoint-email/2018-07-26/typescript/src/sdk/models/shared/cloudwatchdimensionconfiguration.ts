import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValueSourceEnum } from "./dimensionvaluesourceenum";


// CloudWatchDimensionConfiguration
/** 
 * An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.
**/
export class CloudWatchDimensionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultDimensionValue" })
  defaultDimensionValue: string;

  @Metadata({ data: "json, name=DimensionName" })
  dimensionName: string;

  @Metadata({ data: "json, name=DimensionValueSource" })
  dimensionValueSource: DimensionValueSourceEnum;
}
