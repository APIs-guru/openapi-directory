import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionNameValue
/** 
 * A dimension name and value.
**/
export class DimensionNameValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=DimensionName" })
  dimensionName: string;

  @Metadata({ data: "json, name=DimensionValue" })
  dimensionValue: string;
}
