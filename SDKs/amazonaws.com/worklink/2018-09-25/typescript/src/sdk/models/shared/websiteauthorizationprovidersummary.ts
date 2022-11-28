import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationProviderTypeEnum } from "./authorizationprovidertypeenum";



// WebsiteAuthorizationProviderSummary
/** 
 * The summary of the website authorization provider.
**/
export class WebsiteAuthorizationProviderSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationProviderId" })
  authorizationProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizationProviderType" })
  authorizationProviderType: AuthorizationProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;
}
