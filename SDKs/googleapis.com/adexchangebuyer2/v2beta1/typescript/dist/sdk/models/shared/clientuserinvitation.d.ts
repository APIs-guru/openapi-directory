import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
**/
export declare class ClientUserInvitation extends SpeakeasyBase {
    clientAccountId?: string;
    email?: string;
    invitationId?: string;
}
