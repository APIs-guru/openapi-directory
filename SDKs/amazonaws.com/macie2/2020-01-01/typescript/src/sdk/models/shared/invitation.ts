import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationshipStatusEnum } from "./relationshipstatusenum";



// Invitation
/** 
 * Provides information about an Amazon Macie membership invitation that was received by an account.
**/
export class Invitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=invitedAt" })
  invitedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=relationshipStatus" })
  relationshipStatus?: RelationshipStatusEnum;
}
