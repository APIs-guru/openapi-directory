import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseAccount
/** 
 * A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
**/
export class EnterpriseAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountEmail" })
  accountEmail?: string;
}
