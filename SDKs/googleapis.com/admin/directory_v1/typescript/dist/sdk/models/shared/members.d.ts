import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare class Members extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    members?: Member[];
    nextPageToken?: string;
}
