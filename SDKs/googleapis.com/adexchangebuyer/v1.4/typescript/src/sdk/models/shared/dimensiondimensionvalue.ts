import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionDimensionValue
/** 
 * Value of the dimension.
**/
export class DimensionDimensionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}
