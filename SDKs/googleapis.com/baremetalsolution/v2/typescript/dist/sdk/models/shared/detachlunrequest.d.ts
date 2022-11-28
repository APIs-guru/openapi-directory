import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message for detach specific LUN from an Instance.
**/
export declare class DetachLunRequest extends SpeakeasyBase {
    lun?: string;
    skipReboot?: boolean;
}
