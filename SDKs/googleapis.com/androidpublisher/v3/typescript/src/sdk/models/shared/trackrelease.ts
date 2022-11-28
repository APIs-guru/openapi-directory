import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryTargeting } from "./countrytargeting";
import { LocalizedText } from "./localizedtext";


export enum TrackReleaseStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Draft = "draft",
    InProgress = "inProgress",
    Halted = "halted",
    Completed = "completed"
}


// TrackRelease
/** 
 * A release within a track.
**/
export class TrackRelease extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryTargeting" })
  countryTargeting?: CountryTargeting;

  @SpeakeasyMetadata({ data: "json, name=inAppUpdatePriority" })
  inAppUpdatePriority?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseNotes", elemType: LocalizedText })
  releaseNotes?: LocalizedText[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TrackReleaseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=userFraction" })
  userFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=versionCodes" })
  versionCodes?: string[];
}
