import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValueTypeEnum } from "./dimensionvaluetypeenum";


// Dimension
/** 
 * Dimension represents the meta data attributes of the time series. For example, the name and availability zone of an EC2 instance or the name of the manufacturer of a wind turbine are dimensions. 
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionValueType" })
  dimensionValueType?: DimensionValueTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
