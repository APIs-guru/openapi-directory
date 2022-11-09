import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebsiteAuthorizationProviderSummary } from "./websiteauthorizationprovidersummary";


export class ListWebsiteAuthorizationProvidersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WebsiteAuthorizationProviders", elemType: shared.WebsiteAuthorizationProviderSummary })
  websiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];
}
