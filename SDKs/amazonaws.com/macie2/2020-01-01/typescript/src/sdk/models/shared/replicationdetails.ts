import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationDetails
/** 
 * Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
**/
export class ReplicationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicated" })
  replicated?: boolean;

  @Metadata({ data: "json, name=replicatedExternally" })
  replicatedExternally?: boolean;

  @Metadata({ data: "json, name=replicationAccounts" })
  replicationAccounts?: string[];
}
