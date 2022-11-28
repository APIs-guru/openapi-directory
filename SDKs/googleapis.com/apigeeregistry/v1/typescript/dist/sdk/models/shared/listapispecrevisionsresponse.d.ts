import { SpeakeasyBase } from "../../../internal/utils";
import { ApiSpec } from "./apispec";
/**
 * Response message for ListApiSpecRevisionsResponse.
**/
export declare class ListApiSpecRevisionsResponse extends SpeakeasyBase {
    apiSpecs?: ApiSpec[];
    nextPageToken?: string;
}
