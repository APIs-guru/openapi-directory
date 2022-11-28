import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * The response from listing files.
**/
export declare class ListFilesResponse extends SpeakeasyBase {
    files?: File[];
    nextPageToken?: string;
}
