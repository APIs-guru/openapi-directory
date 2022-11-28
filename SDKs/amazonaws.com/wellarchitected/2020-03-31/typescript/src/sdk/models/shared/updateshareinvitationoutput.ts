import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareInvitation } from "./shareinvitation";



export class UpdateShareInvitationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShareInvitation" })
  shareInvitation?: ShareInvitation;
}
