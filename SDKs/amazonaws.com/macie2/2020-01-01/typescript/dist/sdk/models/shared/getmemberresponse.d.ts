import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";
export declare class GetMemberResponse extends SpeakeasyBase {
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
