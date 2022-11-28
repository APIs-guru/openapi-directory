import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SavedReport
/** 
 * Representation of a saved report.
**/
export class SavedReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
