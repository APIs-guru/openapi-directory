import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceDataSyncDestinationDataSharing
/** 
 * Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID.
**/
export class ResourceDataSyncDestinationDataSharing extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationDataSharingType" })
  destinationDataSharingType?: string;
}
