import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entry
/** 
 * A single entry in the confusion matrix.
**/
export class Entry extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemCount" })
  itemCount?: string;

  @Metadata({ data: "json, name=predictedLabel" })
  predictedLabel?: string;
}
