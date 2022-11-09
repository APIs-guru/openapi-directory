import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TranslateTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode: string;

  @Metadata({ data: "json, name=TargetLanguageCode" })
  targetLanguageCode: string;

  @Metadata({ data: "json, name=TerminologyNames" })
  terminologyNames?: string[];

  @Metadata({ data: "json, name=Text" })
  text: string;
}
