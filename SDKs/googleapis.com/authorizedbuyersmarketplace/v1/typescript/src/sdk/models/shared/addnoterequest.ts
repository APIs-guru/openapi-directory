import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Note } from "./note";


// AddNoteRequest
/** 
 * Request to add a note.
**/
export class AddNoteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: Note;
}
