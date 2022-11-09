import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShareInvitation
/** 
 * The share invitation.
**/
export class ShareInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShareInvitationId" })
  shareInvitationId?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
