import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Entry
/** 
 * A single entry in the confusion matrix.
**/
export class Entry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemCount" })
  itemCount?: string;

  @SpeakeasyMetadata({ data: "json, name=predictedLabel" })
  predictedLabel?: string;
}
