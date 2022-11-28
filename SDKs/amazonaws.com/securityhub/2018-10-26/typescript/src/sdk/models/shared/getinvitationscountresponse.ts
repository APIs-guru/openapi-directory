import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInvitationsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvitationsCount" })
  invitationsCount?: number;
}
