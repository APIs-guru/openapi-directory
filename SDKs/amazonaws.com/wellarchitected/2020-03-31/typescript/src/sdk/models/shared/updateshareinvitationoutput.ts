import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareInvitation } from "./shareinvitation";


export class UpdateShareInvitationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShareInvitation" })
  shareInvitation?: ShareInvitation;
}
