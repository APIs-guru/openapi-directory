import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cell
/** 
 * Cell representation.
**/
export class Cell extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
