import { SpeakeasyBase } from "../../../internal/utils";
import { JourneyResponse } from "./journeyresponse";
/**
 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
**/
export declare class JourneysResponse extends SpeakeasyBase {
    item: JourneyResponse[];
    nextToken?: string;
}
