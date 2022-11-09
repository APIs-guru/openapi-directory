import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";


export class DescribeMailboxExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EntityId" })
  entityId?: string;

  @Metadata({ data: "json, name=ErrorInfo" })
  errorInfo?: string;

  @Metadata({ data: "json, name=EstimatedProgress" })
  estimatedProgress?: number;

  @Metadata({ data: "json, name=KmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3Path" })
  s3Path?: string;

  @Metadata({ data: "json, name=S3Prefix" })
  s3Prefix?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: MailboxExportJobStateEnum;
}
