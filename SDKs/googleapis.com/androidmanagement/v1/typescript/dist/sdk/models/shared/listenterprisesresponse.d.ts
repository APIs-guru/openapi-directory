import { SpeakeasyBase } from "../../../internal/utils";
import { Enterprise } from "./enterprise";
/**
 * Response to a request to list enterprises.
**/
export declare class ListEnterprisesResponse extends SpeakeasyBase {
    enterprises?: Enterprise[];
    nextPageToken?: string;
}
