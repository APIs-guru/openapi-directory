import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShareInvitation } from "./resourceshareinvitation";
export declare class GetResourceShareInvitationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShareInvitations?: ResourceShareInvitation[];
}
