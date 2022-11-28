import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { TrainingInputModeEnum } from "./traininginputmodeenum";
/**
 * Defines a named input source, called a channel, to be used by an algorithm.
**/
export declare class ChannelSpecification extends SpeakeasyBase {
    description?: string;
    isRequired?: boolean;
    name: string;
    supportedCompressionTypes?: CompressionTypeEnum[];
    supportedContentTypes: string[];
    supportedInputModes: TrainingInputModeEnum[];
}
