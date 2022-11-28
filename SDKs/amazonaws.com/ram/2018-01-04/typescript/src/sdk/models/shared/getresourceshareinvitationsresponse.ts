import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";



export class GetResourceShareInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareInvitations", elemType: ResourceShareInvitation })
  resourceShareInvitations?: ResourceShareInvitation[];
}
