import { SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";
/**
 * Response to a request to list web apps for a given enterprise.
**/
export declare class ListWebAppsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    webApps?: WebApp[];
}
