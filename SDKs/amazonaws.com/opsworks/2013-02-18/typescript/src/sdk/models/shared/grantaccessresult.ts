import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemporaryCredential } from "./temporarycredential";


// GrantAccessResult
/** 
 * Contains the response to a <code>GrantAccess</code> request.
**/
export class GrantAccessResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemporaryCredential" })
  temporaryCredential?: TemporaryCredential;
}
