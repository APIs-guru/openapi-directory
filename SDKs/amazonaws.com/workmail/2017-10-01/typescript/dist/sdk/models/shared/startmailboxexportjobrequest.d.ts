import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartMailboxExportJobRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    entityId: string;
    kmsKeyArn: string;
    organizationId: string;
    roleArn: string;
    s3BucketName: string;
    s3Prefix: string;
}
