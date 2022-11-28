import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
import { ResourceShareInvitationStatusEnum } from "./resourceshareinvitationstatusenum";



// ResourceShareInvitation
/** 
 * Describes an invitation to join a resource share.
**/
export class ResourceShareInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitationTimestamp" })
  invitationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=receiverAccountId" })
  receiverAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=receiverArn" })
  receiverArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareAssociations", elemType: ResourceShareAssociation })
  resourceShareAssociations?: ResourceShareAssociation[];

  @SpeakeasyMetadata({ data: "json, name=resourceShareInvitationArn" })
  resourceShareInvitationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareName" })
  resourceShareName?: string;

  @SpeakeasyMetadata({ data: "json, name=senderAccountId" })
  senderAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceShareInvitationStatusEnum;
}
