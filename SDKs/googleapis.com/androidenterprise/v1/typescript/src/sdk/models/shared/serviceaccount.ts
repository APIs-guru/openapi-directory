import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccountKey } from "./serviceaccountkey";


// ServiceAccount
/** 
 * A service account identity, including the name and credentials that can be used to authenticate as the service account.
**/
export class ServiceAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: ServiceAccountKey;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
