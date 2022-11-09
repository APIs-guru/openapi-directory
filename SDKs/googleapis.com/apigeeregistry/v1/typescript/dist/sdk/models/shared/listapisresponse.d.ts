import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Api } from "./api";
/**
 * Response message for ListApis.
**/
export declare class ListApisResponse extends SpeakeasyBase {
    apis?: Api[];
    nextPageToken?: string;
}
