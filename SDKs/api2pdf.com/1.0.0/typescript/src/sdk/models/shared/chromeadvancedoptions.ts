import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChromeAdvancedOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=landscape" })
  landscape?: string;

  @SpeakeasyMetadata({ data: "json, name=printBackground" })
  printBackground?: boolean;
}
