import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppliedTerminology } from "./appliedterminology";


export class TranslateTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppliedTerminologies", elemType: shared.AppliedTerminology })
  appliedTerminologies?: AppliedTerminology[];

  @Metadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode: string;

  @Metadata({ data: "json, name=TargetLanguageCode" })
  targetLanguageCode: string;

  @Metadata({ data: "json, name=TranslatedText" })
  translatedText: string;
}
