import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Application } from "./application";
/**
 * Template for a collection of Applications.
**/
export declare class ApplicationsListResponse extends SpeakeasyBase {
    applications?: Application[];
    etag?: string;
    kind?: string;
    nextPageToken?: string;
}
