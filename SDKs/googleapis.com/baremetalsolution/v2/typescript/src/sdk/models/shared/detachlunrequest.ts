import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetachLunRequest
/** 
 * Message for detach specific LUN from an Instance.
**/
export class DetachLunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lun" })
  lun?: string;

  @SpeakeasyMetadata({ data: "json, name=skipReboot" })
  skipReboot?: boolean;
}
