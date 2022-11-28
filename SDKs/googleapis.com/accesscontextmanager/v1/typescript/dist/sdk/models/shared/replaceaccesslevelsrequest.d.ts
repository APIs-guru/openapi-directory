import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLevel } from "./accesslevel";
/**
 * A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
**/
export declare class ReplaceAccessLevelsRequest extends SpeakeasyBase {
    accessLevels?: AccessLevel[];
    etag?: string;
}
