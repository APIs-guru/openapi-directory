import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExternalConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessTokenSecret" })
  accessTokenSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpiresOn" })
  expiresOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExternalUserId" })
  externalUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalUsername" })
  externalUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;
}
