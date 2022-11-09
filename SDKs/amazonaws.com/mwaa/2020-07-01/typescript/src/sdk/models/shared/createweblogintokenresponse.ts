import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWebLoginTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=WebServerHostname" })
  webServerHostname?: string;

  @Metadata({ data: "json, name=WebToken" })
  webToken?: string;
}
