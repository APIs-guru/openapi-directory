import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientUserStatusEnum {
    UserStatusUnspecified = "USER_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Disabled = "DISABLED"
}


// ClientUser
/** 
 * A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.
**/
export class ClientUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientAccountId" })
  clientAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClientUserStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
