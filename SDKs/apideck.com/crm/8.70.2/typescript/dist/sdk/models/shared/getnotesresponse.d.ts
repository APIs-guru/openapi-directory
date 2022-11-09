import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Note } from "./note";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetNotesResponse extends SpeakeasyBase {
    data: Note[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
