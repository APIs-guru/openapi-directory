import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelCountersForWorkteam } from "./labelcountersforworkteam";



// LabelingJobForWorkteamSummary
/** 
 * Provides summary information for a work team.
**/
export class LabelingJobForWorkteamSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=JobReferenceCode" })
  jobReferenceCode: string;

  @SpeakeasyMetadata({ data: "json, name=LabelCounters" })
  labelCounters?: LabelCountersForWorkteam;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobName" })
  labelingJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfHumanWorkersPerDataObject" })
  numberOfHumanWorkersPerDataObject?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkRequesterAccountId" })
  workRequesterAccountId: string;
}
