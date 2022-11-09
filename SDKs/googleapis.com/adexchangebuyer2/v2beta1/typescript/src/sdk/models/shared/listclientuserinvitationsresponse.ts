import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientUserInvitation } from "./clientuserinvitation";


export class ListClientUserInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invitations", elemType: shared.ClientUserInvitation })
  invitations?: ClientUserInvitation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
