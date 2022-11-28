import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * A JSON object representing a batch of unique event occurrences in your app.
**/
export declare class Event extends SpeakeasyBase {
    attributes?: Map<string, string>;
    eventType: string;
    metrics?: Map<string, number>;
    session?: Session;
    timestamp: string;
    version?: string;
}
