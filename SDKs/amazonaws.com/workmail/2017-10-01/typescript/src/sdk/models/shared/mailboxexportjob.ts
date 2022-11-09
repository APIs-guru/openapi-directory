import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";


// MailboxExportJob
/** 
 * The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.
**/
export class MailboxExportJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EntityId" })
  entityId?: string;

  @Metadata({ data: "json, name=EstimatedProgress" })
  estimatedProgress?: number;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3Path" })
  s3Path?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: MailboxExportJobStateEnum;
}
