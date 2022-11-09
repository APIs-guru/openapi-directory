import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetachLunRequest
/** 
 * Message for detach specific LUN from an Instance.
**/
export class DetachLunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lun" })
  lun?: string;

  @Metadata({ data: "json, name=skipReboot" })
  skipReboot?: boolean;
}
