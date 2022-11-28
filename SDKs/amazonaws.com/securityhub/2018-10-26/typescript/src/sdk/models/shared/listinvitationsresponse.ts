import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";



export class ListInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Invitations", elemType: Invitation })
  invitations?: Invitation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
