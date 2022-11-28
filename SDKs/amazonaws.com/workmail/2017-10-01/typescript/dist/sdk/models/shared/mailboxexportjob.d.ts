import { SpeakeasyBase } from "../../../internal/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";
/**
 * The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.
**/
export declare class MailboxExportJob extends SpeakeasyBase {
    description?: string;
    endTime?: Date;
    entityId?: string;
    estimatedProgress?: number;
    jobId?: string;
    s3BucketName?: string;
    s3Path?: string;
    startTime?: Date;
    state?: MailboxExportJobStateEnum;
}
