import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueTypeEnum } from "./dimensionvaluetypeenum";



// Dimension
/** 
 * Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. 
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionValueType" })
  dimensionValueType?: DimensionValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
