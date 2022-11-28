import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class Users extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    nextPageToken?: string;
    triggerEvent?: string;
    users?: User[];
}
