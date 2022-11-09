import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccount } from "./serviceaccount";


// PrincipalInfo
/** 
 * PrincipalInfo represents an Identity oneof.
**/
export class PrincipalInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;
}
