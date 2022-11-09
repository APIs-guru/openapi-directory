import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiSpec } from "./apispec";
/**
 * Response message for ListApiSpecs.
**/
export declare class ListApiSpecsResponse extends SpeakeasyBase {
    apiSpecs?: ApiSpec[];
    nextPageToken?: string;
}
