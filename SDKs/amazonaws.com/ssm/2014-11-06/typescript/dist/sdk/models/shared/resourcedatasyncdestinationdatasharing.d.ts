import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Synchronize Amazon Web Services Systems Manager Inventory data from multiple Amazon Web Services accounts defined in Organizations to a centralized Amazon S3 bucket. Data is synchronized to individual key prefixes in the central bucket. Each key prefix represents a different Amazon Web Services account ID.
**/
export declare class ResourceDataSyncDestinationDataSharing extends SpeakeasyBase {
    destinationDataSharingType?: string;
}
