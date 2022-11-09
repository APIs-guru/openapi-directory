import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteRegionAction
/** 
 * Defines the information about the Region you're deleting from your replication set.
**/
export class DeleteRegionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionName" })
  regionName: string;
}
