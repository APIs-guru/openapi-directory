import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NoteInput } from "./note";



// AddNoteRequestInput
/** 
 * Request message for adding a note to a given proposal.
**/
export class AddNoteRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: NoteInput;
}
