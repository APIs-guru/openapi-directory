import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionTypeEnum } from "./dimensiontypeenum";



// SetDimension
/** 
 * Specifies the dimension type and values for a segment dimension.
**/
export class SetDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionType" })
  dimensionType?: DimensionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
