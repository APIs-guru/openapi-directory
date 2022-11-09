import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";
/**
 * The response from listing versions.
**/
export declare class ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: Version[];
}
