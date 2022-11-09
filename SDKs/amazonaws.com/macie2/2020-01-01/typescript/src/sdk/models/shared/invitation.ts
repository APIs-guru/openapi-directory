import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";


// Invitation
/** 
 * Provides information about an Amazon Macie membership invitation that was received by an account.
**/
export class Invitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @Metadata({ data: "json, name=invitedAt" })
  invitedAt?: Date;

  @Metadata({ data: "json, name=relationshipStatus" })
  relationshipStatus?: RelationshipStatusEnum;
}
