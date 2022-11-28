import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterOptionGroupStatus
/** 
 * Contains status information for a DB cluster option group.
**/
export class DbClusterOptionGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterOptionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
