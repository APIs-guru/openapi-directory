import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * Response for the apps list request.
**/
export declare class ListAppsResponse extends SpeakeasyBase {
    apps?: App[];
    nextPageToken?: string;
}
