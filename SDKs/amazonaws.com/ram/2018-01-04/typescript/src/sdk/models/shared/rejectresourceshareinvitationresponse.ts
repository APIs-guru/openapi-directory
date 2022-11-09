import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";


export class RejectResourceShareInvitationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=resourceShareInvitation" })
  resourceShareInvitation?: ResourceShareInvitation;
}
