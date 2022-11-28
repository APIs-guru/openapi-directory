import { SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";
/**
 * Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
**/
export declare class Uploads extends SpeakeasyBase {
    items?: Upload[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
}
