import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemporaryCredential } from "./temporarycredential";



// GrantAccessResult
/** 
 * Contains the response to a <code>GrantAccess</code> request.
**/
export class GrantAccessResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemporaryCredential" })
  temporaryCredential?: TemporaryCredential;
}
