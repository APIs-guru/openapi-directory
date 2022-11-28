import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about an invitation.
**/
export declare class Invitation extends SpeakeasyBase {
    accountId?: string;
    invitationId?: string;
    invitedAt?: Date;
    memberStatus?: string;
}
