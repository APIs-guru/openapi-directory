import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountKey } from "./serviceaccountkey";



// ServiceAccount
/** 
 * A service account identity, including the name and credentials that can be used to authenticate as the service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: ServiceAccountKey;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
