import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";



// EdgePackagingJobSummary
/** 
 * Summary of edge packaging job.
**/
export class EdgePackagingJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobArn" })
  edgePackagingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobStatus" })
  edgePackagingJobStatus: EdgePackagingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;
}
