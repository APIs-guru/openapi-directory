import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DashboardValidationMessage
/** 
 * An error or warning for the operation.
**/
export class DashboardValidationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dataPath?: string;

  @SpeakeasyMetadata()
  message?: string;
}
