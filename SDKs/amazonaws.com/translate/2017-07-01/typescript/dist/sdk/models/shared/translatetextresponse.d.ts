import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedTerminology } from "./appliedterminology";
export declare class TranslateTextResponse extends SpeakeasyBase {
    appliedTerminologies?: AppliedTerminology[];
    sourceLanguageCode: string;
    targetLanguageCode: string;
    translatedText: string;
}
