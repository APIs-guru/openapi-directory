import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelCounters } from "./labelcounters";
import { LabelingJobOutput } from "./labelingjoboutput";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";


// LabelingJobSummary
/** 
 * Provides summary information about a labeling job.
**/
export class LabelingJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnnotationConsolidationLambdaArn" })
  annotationConsolidationLambdaArn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=InputConfig" })
  inputConfig?: LabelingJobInputConfig;

  @Metadata({ data: "json, name=LabelCounters" })
  labelCounters: LabelCounters;

  @Metadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn: string;

  @Metadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;

  @Metadata({ data: "json, name=LabelingJobOutput" })
  labelingJobOutput?: LabelingJobOutput;

  @Metadata({ data: "json, name=LabelingJobStatus" })
  labelingJobStatus: LabelingJobStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=PreHumanTaskLambdaArn" })
  preHumanTaskLambdaArn: string;

  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
