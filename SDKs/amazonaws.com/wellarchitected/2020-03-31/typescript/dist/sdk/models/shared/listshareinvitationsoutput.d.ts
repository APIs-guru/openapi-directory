import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareInvitationSummary } from "./shareinvitationsummary";
/**
 * Input for List Share Invitations
**/
export declare class ListShareInvitationsOutput extends SpeakeasyBase {
    nextToken?: string;
    shareInvitationSummaries?: ShareInvitationSummary[];
}
