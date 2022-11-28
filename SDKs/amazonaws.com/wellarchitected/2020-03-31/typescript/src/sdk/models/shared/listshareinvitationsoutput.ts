import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareInvitationSummary } from "./shareinvitationsummary";



// ListShareInvitationsOutput
/** 
 * Input for List Share Invitations
**/
export class ListShareInvitationsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareInvitationSummaries", elemType: ShareInvitationSummary })
  shareInvitationSummaries?: ShareInvitationSummary[];
}
