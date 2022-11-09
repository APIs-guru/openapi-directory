import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionTypeEnum } from "./dimensiontypeenum";


// SetDimension
/** 
 * Specifies the dimension type and values for a segment dimension.
**/
export class SetDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionType" })
  dimensionType?: DimensionTypeEnum;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
