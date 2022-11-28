import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteRegionAction
/** 
 * Defines the information about the Region you're deleting from your replication set.
**/
export class DeleteRegionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionName" })
  regionName: string;
}
