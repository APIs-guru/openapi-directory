import { SpeakeasyBase } from "../../../internal/utils";
import { TemporaryCredential } from "./temporarycredential";
/**
 * Contains the response to a <code>GrantAccess</code> request.
**/
export declare class GrantAccessResult extends SpeakeasyBase {
    temporaryCredential?: TemporaryCredential;
}
