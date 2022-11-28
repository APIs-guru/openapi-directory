import { SpeakeasyBase } from "../../../internal/utils";
import { NoteInput } from "./note";
/**
 * Request message for adding a note to a given proposal.
**/
export declare class AddNoteRequestInput extends SpeakeasyBase {
    note?: NoteInput;
}
