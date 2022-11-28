import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCliTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CliToken" })
  cliToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WebServerHostname" })
  webServerHostname?: string;
}
