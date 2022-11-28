import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the Region and KMS key to add to the replication set.
**/
export declare class AddRegionAction extends SpeakeasyBase {
    regionName: string;
    sseKmsKeyId?: string;
}
