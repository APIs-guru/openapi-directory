import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LunRange
/** 
 * A LUN range.
**/
export class LunRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: number;
}
