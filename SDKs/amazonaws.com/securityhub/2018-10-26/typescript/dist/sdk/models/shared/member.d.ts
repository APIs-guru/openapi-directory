import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details about a member account.
**/
export declare class Member extends SpeakeasyBase {
    accountId?: string;
    administratorId?: string;
    email?: string;
    invitedAt?: Date;
    masterId?: string;
    memberStatus?: string;
    updatedAt?: Date;
}
