import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";


// Member
/** 
 * Provides information about an account that's associated with an Amazon Macie administrator account.
**/
export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=administratorAccountId" })
  administratorAccountId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=invitedAt" })
  invitedAt?: Date;

  @Metadata({ data: "json, name=masterAccountId" })
  masterAccountId?: string;

  @Metadata({ data: "json, name=relationshipStatus" })
  relationshipStatus?: RelationshipStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
