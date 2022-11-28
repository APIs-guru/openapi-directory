import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationProviderId" })
  authorizationProviderId?: string;
}
