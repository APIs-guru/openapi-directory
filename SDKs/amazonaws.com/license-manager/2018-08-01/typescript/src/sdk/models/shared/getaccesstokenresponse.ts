import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccessTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;
}
