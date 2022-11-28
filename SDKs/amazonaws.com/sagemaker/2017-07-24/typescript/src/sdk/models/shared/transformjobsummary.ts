import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransformJobStatusEnum } from "./transformjobstatusenum";



// TransformJobSummary
/** 
 * Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.
**/
export class TransformJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransformEndTime" })
  transformEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransformJobArn" })
  transformJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=TransformJobName" })
  transformJobName: string;

  @SpeakeasyMetadata({ data: "json, name=TransformJobStatus" })
  transformJobStatus: TransformJobStatusEnum;
}
