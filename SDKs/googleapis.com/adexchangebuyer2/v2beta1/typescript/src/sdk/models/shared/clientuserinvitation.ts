import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientUserInvitation
/** 
 * An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
**/
export class ClientUserInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientAccountId" })
  clientAccountId?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=invitationId" })
  invitationId?: string;
}
