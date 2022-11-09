import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShareInvitationSummary } from "./shareinvitationsummary";


// ListShareInvitationsOutput
/** 
 * Input for List Share Invitations
**/
export class ListShareInvitationsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ShareInvitationSummaries", elemType: shared.ShareInvitationSummary })
  shareInvitationSummaries?: ShareInvitationSummary[];
}
