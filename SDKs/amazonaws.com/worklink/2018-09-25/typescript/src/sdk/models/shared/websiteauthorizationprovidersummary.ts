import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationProviderTypeEnum } from "./authorizationprovidertypeenum";


// WebsiteAuthorizationProviderSummary
/** 
 * The summary of the website authorization provider.
**/
export class WebsiteAuthorizationProviderSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationProviderId" })
  authorizationProviderId?: string;

  @Metadata({ data: "json, name=AuthorizationProviderType" })
  authorizationProviderType: AuthorizationProviderTypeEnum;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;
}
