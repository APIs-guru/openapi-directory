import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterOptionGroupStatus
/** 
 * Not supported by Neptune.
**/
export class DbClusterOptionGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterOptionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
