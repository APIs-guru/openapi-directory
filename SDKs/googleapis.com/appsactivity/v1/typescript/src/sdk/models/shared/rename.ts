import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Rename
/** 
 * Contains information about a renametype event.
**/
export class Rename extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newTitle" })
  newTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=oldTitle" })
  oldTitle?: string;
}
