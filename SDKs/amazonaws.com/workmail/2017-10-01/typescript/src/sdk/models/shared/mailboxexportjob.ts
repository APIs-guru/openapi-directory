import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";



// MailboxExportJob
/** 
 * The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.
**/
export class MailboxExportJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=EstimatedProgress" })
  estimatedProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Path" })
  s3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: MailboxExportJobStateEnum;
}
