import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TranslateTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode: string;

  @SpeakeasyMetadata({ data: "json, name=TargetLanguageCode" })
  targetLanguageCode: string;

  @SpeakeasyMetadata({ data: "json, name=TerminologyNames" })
  terminologyNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text: string;
}
