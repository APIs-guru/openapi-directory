import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabeledItem
/** 
 * A single item in a labeled column.
**/
export class LabeledItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
