import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BusinessAccount } from "./businessaccount";
import { IndividualAccount } from "./individualaccount";


// UserResponse
/** 
 * The type that defines the fields for the getUser method.
**/
export class UserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountType" })
  accountType?: string;

  @Metadata({ data: "json, name=businessAccount" })
  businessAccount?: BusinessAccount;

  @Metadata({ data: "json, name=individualAccount" })
  individualAccount?: IndividualAccount;

  @Metadata({ data: "json, name=registrationMarketplaceId" })
  registrationMarketplaceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
