import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionDimensionValue
/** 
 * Value of the dimension.
**/
export class DimensionDimensionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;
}
