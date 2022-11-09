import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInvitationsCountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvitationsCount" })
  invitationsCount?: number;
}
