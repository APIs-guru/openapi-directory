import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationEndpoint" })
  authorizationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=clientIdIssuedAt" })
  clientIdIssuedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecretExpiresAt" })
  clientSecretExpiresAt?: number;

  @SpeakeasyMetadata({ data: "json, name=tokenEndpoint" })
  tokenEndpoint?: string;
}
