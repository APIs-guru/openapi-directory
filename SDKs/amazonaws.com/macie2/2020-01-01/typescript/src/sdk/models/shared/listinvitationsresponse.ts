import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Invitation } from "./invitation";


export class ListInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invitations", elemType: shared.Invitation })
  invitations?: Invitation[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
