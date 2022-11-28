import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";
export declare class GetResourceShareInvitationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShareInvitations?: ResourceShareInvitation[];
}
