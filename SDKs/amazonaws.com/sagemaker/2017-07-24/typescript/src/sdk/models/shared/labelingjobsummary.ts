import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobInputConfig } from "./labelingjobinputconfig";
import { LabelCounters } from "./labelcounters";
import { LabelingJobOutput } from "./labelingjoboutput";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";



// LabelingJobSummary
/** 
 * Provides summary information about a labeling job.
**/
export class LabelingJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnnotationConsolidationLambdaArn" })
  annotationConsolidationLambdaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=InputConfig" })
  inputConfig?: LabelingJobInputConfig;

  @SpeakeasyMetadata({ data: "json, name=LabelCounters" })
  labelCounters: LabelCounters;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobOutput" })
  labelingJobOutput?: LabelingJobOutput;

  @SpeakeasyMetadata({ data: "json, name=LabelingJobStatus" })
  labelingJobStatus: LabelingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=PreHumanTaskLambdaArn" })
  preHumanTaskLambdaArn: string;

  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;
}
