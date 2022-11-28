import { SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";
export declare class ListInvitationsResponse extends SpeakeasyBase {
    invitations?: Invitation[];
    nextToken?: string;
}
