import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCliTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CliToken" })
  cliToken?: string;

  @Metadata({ data: "json, name=WebServerHostname" })
  webServerHostname?: string;
}
