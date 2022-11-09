import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClientUserStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Invited = "INVITED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// ClientUser
/** 
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
export class ClientUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ClientUserStateEnum;
}
