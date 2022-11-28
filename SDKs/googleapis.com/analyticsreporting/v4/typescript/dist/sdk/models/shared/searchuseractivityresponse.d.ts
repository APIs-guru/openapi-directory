import { SpeakeasyBase } from "../../../internal/utils";
import { UserActivitySession } from "./useractivitysession";
/**
 * The response from `userActivity:get` call.
**/
export declare class SearchUserActivityResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sampleRate?: number;
    sessions?: UserActivitySession[];
    totalRows?: number;
}
