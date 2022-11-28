import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
/**
 * Authentication method
**/
export declare class UserAuthMethod extends SpeakeasyBase {
    authId: string;
    isEnabled: boolean;
    options?: KeyValueEntry[];
}
