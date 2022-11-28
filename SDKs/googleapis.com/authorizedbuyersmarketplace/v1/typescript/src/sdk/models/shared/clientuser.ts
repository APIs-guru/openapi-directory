import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientUserStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Invited = "INVITED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// ClientUser
/** 
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
export class ClientUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ClientUserStateEnum;
}


// ClientUserInput
/** 
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
export class ClientUserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
