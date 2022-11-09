import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLevel } from "./accesslevel";
/**
 * A response to `ListAccessLevelsRequest`.
**/
export declare class ListAccessLevelsResponse extends SpeakeasyBase {
    accessLevels?: AccessLevel[];
    nextPageToken?: string;
}
