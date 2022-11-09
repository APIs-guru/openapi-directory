import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpenIdProvider
/** 
 * OpenID Connect provider information
**/
export class OpenIdProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isGlobalAvailable" })
  isGlobalAvailable: boolean;

  @Metadata({ data: "json, name=issuer" })
  issuer: string;

  @Metadata({ data: "json, name=mappingClaim" })
  mappingClaim: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=userManagementUrl" })
  userManagementUrl?: string;
}
