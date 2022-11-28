import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";
/**
 * Provides information about an account that's associated with an Amazon Macie administrator account.
**/
export declare class Member extends SpeakeasyBase {
    accountId?: string;
    administratorAccountId?: string;
    arn?: string;
    email?: string;
    invitedAt?: Date;
    masterAccountId?: string;
    relationshipStatus?: RelationshipStatusEnum;
    tags?: Map<string, string>;
    updatedAt?: Date;
}
