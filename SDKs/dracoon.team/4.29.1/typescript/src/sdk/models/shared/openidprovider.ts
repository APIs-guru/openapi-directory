import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpenIdProvider
/** 
 * OpenID Connect provider information
**/
export class OpenIdProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isGlobalAvailable" })
  isGlobalAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=issuer" })
  issuer: string;

  @SpeakeasyMetadata({ data: "json, name=mappingClaim" })
  mappingClaim: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=userManagementUrl" })
  userManagementUrl?: string;
}
