import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NoteInput } from "./note";



// AddNoteRequestInput
/** 
 * Request to add a note.
**/
export class AddNoteRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: NoteInput;
}
