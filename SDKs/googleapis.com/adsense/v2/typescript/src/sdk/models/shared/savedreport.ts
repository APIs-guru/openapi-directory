import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SavedReport
/** 
 * Representation of a saved report.
**/
export class SavedReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
