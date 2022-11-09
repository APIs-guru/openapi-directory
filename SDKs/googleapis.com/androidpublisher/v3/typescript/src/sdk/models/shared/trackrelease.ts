import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CountryTargeting } from "./countrytargeting";
import { LocalizedText } from "./localizedtext";

export enum TrackReleaseStatusEnum {
    StatusUnspecified = "statusUnspecified"
,    Draft = "draft"
,    InProgress = "inProgress"
,    Halted = "halted"
,    Completed = "completed"
}


// TrackRelease
/** 
 * A release within a track.
**/
export class TrackRelease extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryTargeting" })
  countryTargeting?: CountryTargeting;

  @Metadata({ data: "json, name=inAppUpdatePriority" })
  inAppUpdatePriority?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseNotes", elemType: shared.LocalizedText })
  releaseNotes?: LocalizedText[];

  @Metadata({ data: "json, name=status" })
  status?: TrackReleaseStatusEnum;

  @Metadata({ data: "json, name=userFraction" })
  userFraction?: number;

  @Metadata({ data: "json, name=versionCodes" })
  versionCodes?: string[];
}
