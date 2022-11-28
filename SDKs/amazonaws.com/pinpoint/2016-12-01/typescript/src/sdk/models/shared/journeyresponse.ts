import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=Activities", elemType: Activity })
  activities?: Map<string, Activity>;

  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Limits" })
  limits?: JourneyLimits;

  @SpeakeasyMetadata({ data: "json, name=LocalTime" })
  localTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=QuietTime" })
  quietTime?: QuietTime;

  @SpeakeasyMetadata({ data: "json, name=RefreshFrequency" })
  refreshFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=RefreshOnSegmentUpdate" })
  refreshOnSegmentUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: JourneySchedule;

  @SpeakeasyMetadata({ data: "json, name=StartActivity" })
  startActivity?: string;

  @SpeakeasyMetadata({ data: "json, name=StartCondition" })
  startCondition?: StartCondition;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: StateEnum;

  @SpeakeasyMetadata({ data: "json, name=WaitForQuietTime" })
  waitForQuietTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
