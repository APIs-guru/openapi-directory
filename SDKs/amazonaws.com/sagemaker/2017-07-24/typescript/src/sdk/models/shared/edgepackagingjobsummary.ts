import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";


// EdgePackagingJobSummary
/** 
 * Summary of edge packaging job.
**/
export class EdgePackagingJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=EdgePackagingJobArn" })
  edgePackagingJobArn: string;

  @Metadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;

  @Metadata({ data: "json, name=EdgePackagingJobStatus" })
  edgePackagingJobStatus: EdgePackagingJobStatusEnum;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;
}
