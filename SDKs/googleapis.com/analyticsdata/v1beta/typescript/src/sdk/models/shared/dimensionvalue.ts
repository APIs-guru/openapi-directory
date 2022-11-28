import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionValue
/** 
 * The value of a dimension.
**/
export class DimensionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
