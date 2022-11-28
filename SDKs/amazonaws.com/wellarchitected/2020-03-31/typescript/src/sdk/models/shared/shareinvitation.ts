import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShareInvitation
/** 
 * The share invitation.
**/
export class ShareInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShareInvitationId" })
  shareInvitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
