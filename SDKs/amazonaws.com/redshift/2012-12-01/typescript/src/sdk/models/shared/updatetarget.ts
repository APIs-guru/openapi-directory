import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedOperation } from "./supportedoperation";



// UpdateTarget
/** 
 * A maintenance track that you can switch the current track to.
**/
export class UpdateTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseVersion?: string;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata({ elemType: SupportedOperation })
  supportedOperations?: SupportedOperation[];
}
