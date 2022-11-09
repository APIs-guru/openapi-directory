import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Parent
/** 
 * A parent label for a label. A label can have 0, 1, or more parents. 
**/
export class Parent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;
}
