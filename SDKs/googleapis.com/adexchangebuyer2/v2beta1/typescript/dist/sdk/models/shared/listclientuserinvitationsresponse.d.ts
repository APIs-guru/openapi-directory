import { SpeakeasyBase } from "../../../internal/utils";
import { ClientUserInvitation } from "./clientuserinvitation";
export declare class ListClientUserInvitationsResponse extends SpeakeasyBase {
    invitations?: ClientUserInvitation[];
    nextPageToken?: string;
}
