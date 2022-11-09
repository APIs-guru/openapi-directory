import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformJobStatusEnum } from "./transformjobstatusenum";


// TransformJobSummary
/** 
 * Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.
**/
export class TransformJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=TransformEndTime" })
  transformEndTime?: Date;

  @Metadata({ data: "json, name=TransformJobArn" })
  transformJobArn: string;

  @Metadata({ data: "json, name=TransformJobName" })
  transformJobName: string;

  @Metadata({ data: "json, name=TransformJobStatus" })
  transformJobStatus: TransformJobStatusEnum;
}
