import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebsiteAuthorizationProviderSummary } from "./websiteauthorizationprovidersummary";



export class ListWebsiteAuthorizationProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WebsiteAuthorizationProviders", elemType: WebsiteAuthorizationProviderSummary })
  websiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];
}
