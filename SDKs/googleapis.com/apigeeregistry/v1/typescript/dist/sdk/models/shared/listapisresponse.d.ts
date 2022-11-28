import { SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
/**
 * Response message for ListApis.
**/
export declare class ListApisResponse extends SpeakeasyBase {
    apis?: Api[];
    nextPageToken?: string;
}
