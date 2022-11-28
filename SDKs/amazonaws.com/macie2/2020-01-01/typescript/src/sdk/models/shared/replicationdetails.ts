import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationDetails
/** 
 * Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other Amazon Web Services accounts and, if so, which accounts.
**/
export class ReplicationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicated" })
  replicated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replicatedExternally" })
  replicatedExternally?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replicationAccounts" })
  replicationAccounts?: string[];
}
