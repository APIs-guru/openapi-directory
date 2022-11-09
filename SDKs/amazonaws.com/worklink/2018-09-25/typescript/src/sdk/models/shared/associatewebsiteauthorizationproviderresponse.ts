import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationProviderId" })
  authorizationProviderId?: string;
}
