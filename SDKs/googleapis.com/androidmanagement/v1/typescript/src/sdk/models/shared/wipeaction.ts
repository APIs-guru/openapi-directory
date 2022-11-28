import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WipeAction
/** 
 * An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
**/
export class WipeAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preserveFrp" })
  preserveFrp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wipeAfterDays" })
  wipeAfterDays?: number;
}
