import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChromeAdvancedOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=landscape" })
  landscape?: string;

  @Metadata({ data: "json, name=printBackground" })
  printBackground?: boolean;
}
