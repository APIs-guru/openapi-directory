import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";



export class DescribeMailboxExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorInfo" })
  errorInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=EstimatedProgress" })
  estimatedProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Path" })
  s3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Prefix" })
  s3Prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: MailboxExportJobStateEnum;
}
