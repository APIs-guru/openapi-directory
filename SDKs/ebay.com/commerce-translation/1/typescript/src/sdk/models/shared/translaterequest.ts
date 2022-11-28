import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TranslateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=translationContext" })
  translationContext?: string;
}
