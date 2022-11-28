import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabeledItem
/** 
 * A single item in a labeled column.
**/
export class LabeledItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
