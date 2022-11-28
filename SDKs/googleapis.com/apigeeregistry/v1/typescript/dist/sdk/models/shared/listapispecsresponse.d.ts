import { SpeakeasyBase } from "../../../internal/utils";
import { ApiSpec } from "./apispec";
/**
 * Response message for ListApiSpecs.
**/
export declare class ListApiSpecsResponse extends SpeakeasyBase {
    apiSpecs?: ApiSpec[];
    nextPageToken?: string;
}
