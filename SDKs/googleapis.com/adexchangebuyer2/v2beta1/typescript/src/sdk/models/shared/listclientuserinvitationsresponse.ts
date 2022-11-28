import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientUserInvitation } from "./clientuserinvitation";



export class ListClientUserInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitations", elemType: ClientUserInvitation })
  invitations?: ClientUserInvitation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
