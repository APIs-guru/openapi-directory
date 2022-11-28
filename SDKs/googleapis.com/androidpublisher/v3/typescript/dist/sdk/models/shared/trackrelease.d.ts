import { SpeakeasyBase } from "../../../internal/utils";
import { CountryTargeting } from "./countrytargeting";
import { LocalizedText } from "./localizedtext";
export declare enum TrackReleaseStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Draft = "draft",
    InProgress = "inProgress",
    Halted = "halted",
    Completed = "completed"
}
/**
 * A release within a track.
**/
export declare class TrackRelease extends SpeakeasyBase {
    countryTargeting?: CountryTargeting;
    inAppUpdatePriority?: number;
    name?: string;
    releaseNotes?: LocalizedText[];
    status?: TrackReleaseStatusEnum;
    userFraction?: number;
    versionCodes?: string[];
}
