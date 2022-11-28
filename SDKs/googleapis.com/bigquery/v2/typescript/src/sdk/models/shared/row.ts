import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entry } from "./entry";



// Row
/** 
 * A single row in the confusion matrix.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actualLabel" })
  actualLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=entries", elemType: Entry })
  entries?: Entry[];
}
