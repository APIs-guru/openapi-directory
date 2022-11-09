import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionValue
/** 
 * The value of a dimension.
**/
export class DimensionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
