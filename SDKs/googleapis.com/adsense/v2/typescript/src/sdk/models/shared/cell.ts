import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cell
/** 
 * Cell representation.
**/
export class Cell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
