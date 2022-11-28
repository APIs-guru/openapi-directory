import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Translation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=originalText" })
  originalText?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=translatedText" })
  translatedText?: string;
}
