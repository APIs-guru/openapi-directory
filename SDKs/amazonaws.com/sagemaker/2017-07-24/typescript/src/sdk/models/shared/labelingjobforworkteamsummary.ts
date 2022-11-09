import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelCountersForWorkteam } from "./labelcountersforworkteam";


// LabelingJobForWorkteamSummary
/** 
 * Provides summary information for a work team.
**/
export class LabelingJobForWorkteamSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=JobReferenceCode" })
  jobReferenceCode: string;

  @Metadata({ data: "json, name=LabelCounters" })
  labelCounters?: LabelCountersForWorkteam;

  @Metadata({ data: "json, name=LabelingJobName" })
  labelingJobName?: string;

  @Metadata({ data: "json, name=NumberOfHumanWorkersPerDataObject" })
  numberOfHumanWorkersPerDataObject?: number;

  @Metadata({ data: "json, name=WorkRequesterAccountId" })
  workRequesterAccountId: string;
}
