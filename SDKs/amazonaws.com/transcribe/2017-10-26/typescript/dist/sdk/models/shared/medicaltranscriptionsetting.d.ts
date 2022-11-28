import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional settings for the <a>StartMedicalTranscriptionJob</a> operation.
**/
export declare class MedicalTranscriptionSetting extends SpeakeasyBase {
    channelIdentification?: boolean;
    maxAlternatives?: number;
    maxSpeakerLabels?: number;
    showAlternatives?: boolean;
    showSpeakerLabels?: boolean;
    vocabularyName?: string;
}
