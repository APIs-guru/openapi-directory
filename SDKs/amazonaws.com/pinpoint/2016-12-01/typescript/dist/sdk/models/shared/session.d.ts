import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a session.
**/
export declare class Session extends SpeakeasyBase {
    duration?: number;
    id: string;
    startTimestamp: string;
    stopTimestamp?: string;
}
