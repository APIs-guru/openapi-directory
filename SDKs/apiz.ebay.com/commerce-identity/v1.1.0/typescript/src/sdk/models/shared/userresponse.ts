import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BusinessAccount } from "./businessaccount";
import { IndividualAccount } from "./individualaccount";



// UserResponse
/** 
 * The type that defines the fields for the getUser method.
**/
export class UserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=businessAccount" })
  businessAccount?: BusinessAccount;

  @SpeakeasyMetadata({ data: "json, name=individualAccount" })
  individualAccount?: IndividualAccount;

  @SpeakeasyMetadata({ data: "json, name=registrationMarketplaceId" })
  registrationMarketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
