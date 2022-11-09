import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Translation extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=originalText" })
  originalText?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=translatedText" })
  translatedText?: string;
}
