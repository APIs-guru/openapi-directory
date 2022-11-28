import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OAuthApproval
/** 
 * OAuth client approval information
**/
export class OAuthApproval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt?: Date;
}
