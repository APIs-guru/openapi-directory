import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;
}
