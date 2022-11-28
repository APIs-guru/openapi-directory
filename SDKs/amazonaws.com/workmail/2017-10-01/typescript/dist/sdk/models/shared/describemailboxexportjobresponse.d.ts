import { SpeakeasyBase } from "../../../internal/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";
export declare class DescribeMailboxExportJobResponse extends SpeakeasyBase {
    description?: string;
    endTime?: Date;
    entityId?: string;
    errorInfo?: string;
    estimatedProgress?: number;
    kmsKeyArn?: string;
    roleArn?: string;
    s3BucketName?: string;
    s3Path?: string;
    s3Prefix?: string;
    startTime?: Date;
    state?: MailboxExportJobStateEnum;
}
