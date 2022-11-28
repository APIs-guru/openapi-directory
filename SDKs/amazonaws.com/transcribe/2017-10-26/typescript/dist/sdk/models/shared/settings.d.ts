import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";
/**
 * Provides optional settings for the <code>StartTranscriptionJob</code> operation.
**/
export declare class Settings extends SpeakeasyBase {
    channelIdentification?: boolean;
    maxAlternatives?: number;
    maxSpeakerLabels?: number;
    showAlternatives?: boolean;
    showSpeakerLabels?: boolean;
    vocabularyFilterMethod?: VocabularyFilterMethodEnum;
    vocabularyFilterName?: string;
    vocabularyName?: string;
}
