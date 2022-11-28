import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { JourneyLimits } from "./journeylimits";
import { QuietTime } from "./quiettime";
import { JourneySchedule } from "./journeyschedule";
import { StartCondition } from "./startcondition";
import { StateEnum } from "./stateenum";
/**
 * Provides information about the status, configuration, and other settings for a journey.
**/
export declare class JourneyResponse extends SpeakeasyBase {
    activities?: Map<string, Activity>;
    applicationId: string;
    creationDate?: string;
    id: string;
    lastModifiedDate?: string;
    limits?: JourneyLimits;
    localTime?: boolean;
    name: string;
    quietTime?: QuietTime;
    refreshFrequency?: string;
    refreshOnSegmentUpdate?: boolean;
    schedule?: JourneySchedule;
    startActivity?: string;
    startCondition?: StartCondition;
    state?: StateEnum;
    waitForQuietTime?: boolean;
    tags?: Map<string, string>;
}
