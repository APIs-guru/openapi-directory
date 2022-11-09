import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Note } from "./note";
export declare class GetNoteResponse extends SpeakeasyBase {
    data: Note;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
