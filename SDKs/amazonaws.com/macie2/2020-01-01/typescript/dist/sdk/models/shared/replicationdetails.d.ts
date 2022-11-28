import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
**/
export declare class ReplicationDetails extends SpeakeasyBase {
    replicated?: boolean;
    replicatedExternally?: boolean;
    replicationAccounts?: string[];
}
