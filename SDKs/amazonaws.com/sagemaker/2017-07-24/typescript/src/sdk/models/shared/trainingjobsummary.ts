import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";


// TrainingJobSummary
/** 
 * Provides summary information about a training job.
**/
export class TrainingJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @Metadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;

  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @Metadata({ data: "json, name=TrainingJobStatus" })
  trainingJobStatus: TrainingJobStatusEnum;
}
