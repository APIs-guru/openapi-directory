import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddRegionAction
/** 
 * Defines the Region and KMS key to add to the replication set. 
**/
export class AddRegionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionName" })
  regionName: string;

  @Metadata({ data: "json, name=sseKmsKeyId" })
  sseKmsKeyId?: string;
}
