import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";


export class AcceptResourceShareInvitationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=resourceShareInvitation" })
  resourceShareInvitation?: ResourceShareInvitation;
}
