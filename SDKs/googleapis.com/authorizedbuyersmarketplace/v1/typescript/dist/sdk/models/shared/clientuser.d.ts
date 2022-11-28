import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ClientUserStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Invited = "INVITED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
export declare class ClientUser extends SpeakeasyBase {
    email?: string;
    name?: string;
    state?: ClientUserStateEnum;
}
/**
 * A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
**/
export declare class ClientUserInput extends SpeakeasyBase {
    email?: string;
}
