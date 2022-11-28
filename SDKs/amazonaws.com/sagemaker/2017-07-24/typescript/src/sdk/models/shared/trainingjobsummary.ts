import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";



// TrainingJobSummary
/** 
 * Provides summary information about a training job.
**/
export class TrainingJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobStatus" })
  trainingJobStatus: TrainingJobStatusEnum;
}
