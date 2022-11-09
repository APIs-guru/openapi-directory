import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activity } from "./activity";
import { JourneyLimits } from "./journeylimits";
import { QuietTime } from "./quiettime";
import { JourneySchedule } from "./journeyschedule";
import { StartCondition } from "./startcondition";
import { StateEnum } from "./stateenum";


// JourneyResponse
/** 
 * Provides information about the status, configuration, and other settings for a journey.
**/
export class JourneyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Activities", elemType: shared.Activity })
  activities?: Map<string, Activity>;

  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=Limits" })
  limits?: JourneyLimits;

  @Metadata({ data: "json, name=LocalTime" })
  localTime?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;

  @Metadata({ data: "json, name=RefreshFrequency" })
  refreshFrequency?: string;

  @Metadata({ data: "json, name=RefreshOnSegmentUpdate" })
  refreshOnSegmentUpdate?: boolean;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: JourneySchedule;

  @Metadata({ data: "json, name=StartActivity" })
  startActivity?: string;

  @Metadata({ data: "json, name=StartCondition" })
  startCondition?: StartCondition;

  @Metadata({ data: "json, name=State" })
  state?: StateEnum;

  @Metadata({ data: "json, name=WaitForQuietTime" })
  waitForQuietTime?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
