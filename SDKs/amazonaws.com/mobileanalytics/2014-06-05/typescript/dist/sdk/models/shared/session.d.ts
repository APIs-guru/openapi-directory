import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the session. Session information is required on ALL events.
**/
export declare class Session extends SpeakeasyBase {
    duration?: number;
    id?: string;
    startTimestamp?: string;
    stopTimestamp?: string;
}
