import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddRegionAction
/** 
 * Defines the Region and KMS key to add to the replication set. 
**/
export class AddRegionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName: string;

  @SpeakeasyMetadata({ data: "json, name=sseKmsKeyId" })
  sseKmsKeyId?: string;
}
