import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExternalConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=AccessTokenSecret" })
  accessTokenSecret?: string;

  @Metadata({ data: "json, name=Data" })
  data?: string;

  @Metadata({ data: "json, name=ExpiresOn" })
  expiresOn?: Date;

  @Metadata({ data: "json, name=ExternalUserId" })
  externalUserId?: string;

  @Metadata({ data: "json, name=ExternalUsername" })
  externalUsername?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Provider" })
  provider?: string;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;
}
