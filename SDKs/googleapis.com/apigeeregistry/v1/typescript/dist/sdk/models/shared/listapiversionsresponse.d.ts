import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiVersion } from "./apiversion";
/**
 * Response message for ListApiVersions.
**/
export declare class ListApiVersionsResponse extends SpeakeasyBase {
    apiVersions?: ApiVersion[];
    nextPageToken?: string;
}
