import { SpeakeasyBase } from "../../../internal/utils";
import { RedactionOutputEnum } from "./redactionoutputenum";
import { RedactionTypeEnum } from "./redactiontypeenum";
/**
 * Settings for content redaction within a transcription job.
**/
export declare class ContentRedaction extends SpeakeasyBase {
    redactionOutput: RedactionOutputEnum;
    redactionType: RedactionTypeEnum;
}
