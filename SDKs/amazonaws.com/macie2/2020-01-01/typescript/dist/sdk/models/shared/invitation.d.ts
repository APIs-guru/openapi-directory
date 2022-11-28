import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";
/**
 * Provides information about an Amazon Macie membership invitation that was received by an account.
**/
export declare class Invitation extends SpeakeasyBase {
    accountId?: string;
    invitationId?: string;
    invitedAt?: Date;
    relationshipStatus?: RelationshipStatusEnum;
}
