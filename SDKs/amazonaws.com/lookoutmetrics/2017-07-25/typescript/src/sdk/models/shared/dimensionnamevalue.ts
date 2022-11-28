import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DimensionNameValue
/** 
 * A dimension name and value.
**/
export class DimensionNameValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DimensionName" })
  dimensionName: string;

  @SpeakeasyMetadata({ data: "json, name=DimensionValue" })
  dimensionValue: string;
}
