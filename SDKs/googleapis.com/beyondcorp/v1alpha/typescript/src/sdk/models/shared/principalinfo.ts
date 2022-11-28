import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccount } from "./serviceaccount";



// PrincipalInfo
/** 
 * PrincipalInfo represents an Identity oneof.
**/
export class PrincipalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;
}
