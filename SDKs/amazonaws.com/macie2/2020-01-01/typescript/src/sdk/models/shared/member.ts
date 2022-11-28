import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";



// Member
/** 
 * Provides information about an account that's associated with an Amazon Macie administrator account.
**/
export class Member extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=administratorAccountId" })
  administratorAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=invitedAt" })
  invitedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=masterAccountId" })
  masterAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=relationshipStatus" })
  relationshipStatus?: RelationshipStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
