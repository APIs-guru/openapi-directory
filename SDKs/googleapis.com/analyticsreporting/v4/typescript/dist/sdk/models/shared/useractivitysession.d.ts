import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * This represents a user session performed on a specific device at a certain time over a period of time.
**/
export declare class UserActivitySession extends SpeakeasyBase {
    activities?: Activity[];
    dataSource?: string;
    deviceCategory?: string;
    platform?: string;
    sessionDate?: string;
    sessionId?: string;
}
