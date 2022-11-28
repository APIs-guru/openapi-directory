import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";



export class AcceptResourceShareInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareInvitation" })
  resourceShareInvitation?: ResourceShareInvitation;
}
