import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OAuthApproval
/** 
 * OAuth client approval information
**/
export class OAuthApproval extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;
}
