import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceShareAssociation } from "./resourceshareassociation";
import { ResourceShareInvitationStatusEnum } from "./resourceshareinvitationstatusenum";


// ResourceShareInvitation
/** 
 * Describes an invitation to join a resource share.
**/
export class ResourceShareInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=invitationTimestamp" })
  invitationTimestamp?: Date;

  @Metadata({ data: "json, name=receiverAccountId" })
  receiverAccountId?: string;

  @Metadata({ data: "json, name=receiverArn" })
  receiverArn?: string;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;

  @Metadata({ data: "json, name=resourceShareAssociations", elemType: shared.ResourceShareAssociation })
  resourceShareAssociations?: ResourceShareAssociation[];

  @Metadata({ data: "json, name=resourceShareInvitationArn" })
  resourceShareInvitationArn?: string;

  @Metadata({ data: "json, name=resourceShareName" })
  resourceShareName?: string;

  @Metadata({ data: "json, name=senderAccountId" })
  senderAccountId?: string;

  @Metadata({ data: "json, name=status" })
  status?: ResourceShareInvitationStatusEnum;
}
