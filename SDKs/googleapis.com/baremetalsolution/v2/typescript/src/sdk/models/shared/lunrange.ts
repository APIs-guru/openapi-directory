import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LunRange
/** 
 * A LUN(Logical Unit Number) range.
**/
export class LunRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: number;
}
