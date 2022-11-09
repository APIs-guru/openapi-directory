import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterClientResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationEndpoint" })
  authorizationEndpoint?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=clientIdIssuedAt" })
  clientIdIssuedAt?: number;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=clientSecretExpiresAt" })
  clientSecretExpiresAt?: number;

  @Metadata({ data: "json, name=tokenEndpoint" })
  tokenEndpoint?: string;
}
