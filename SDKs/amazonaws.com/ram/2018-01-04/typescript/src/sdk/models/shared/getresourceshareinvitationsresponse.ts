import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceShareInvitation } from "./resourceshareinvitation";


export class GetResourceShareInvitationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceShareInvitations", elemType: shared.ResourceShareInvitation })
  resourceShareInvitations?: ResourceShareInvitation[];
}
