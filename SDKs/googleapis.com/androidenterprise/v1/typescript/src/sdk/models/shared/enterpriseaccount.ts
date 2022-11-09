import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseAccount
/** 
 * A service account that can be used to authenticate as the enterprise to API calls that require such authentication.
**/
export class EnterpriseAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountEmail" })
  accountEmail?: string;
}
