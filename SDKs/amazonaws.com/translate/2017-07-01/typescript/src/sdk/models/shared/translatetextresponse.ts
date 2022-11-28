import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppliedTerminology } from "./appliedterminology";



export class TranslateTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppliedTerminologies", elemType: AppliedTerminology })
  appliedTerminologies?: AppliedTerminology[];

  @SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode: string;

  @SpeakeasyMetadata({ data: "json, name=TargetLanguageCode" })
  targetLanguageCode: string;

  @SpeakeasyMetadata({ data: "json, name=TranslatedText" })
  translatedText: string;
}
