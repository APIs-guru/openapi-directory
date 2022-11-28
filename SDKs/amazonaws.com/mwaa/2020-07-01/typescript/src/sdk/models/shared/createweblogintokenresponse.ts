import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWebLoginTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WebServerHostname" })
  webServerHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=WebToken" })
  webToken?: string;
}
