import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Note } from "./note";


// AddNoteRequest
/** 
 * Request message for adding a note to a given proposal.
**/
export class AddNoteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: Note;
}
