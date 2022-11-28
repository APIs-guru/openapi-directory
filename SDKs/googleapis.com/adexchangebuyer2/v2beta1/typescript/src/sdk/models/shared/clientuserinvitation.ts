import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientUserInvitation
/** 
 * An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
**/
export class ClientUserInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientAccountId" })
  clientAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=invitationId" })
  invitationId?: string;
}
