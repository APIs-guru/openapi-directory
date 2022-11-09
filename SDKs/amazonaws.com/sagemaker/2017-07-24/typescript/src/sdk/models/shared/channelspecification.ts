import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { TrainingInputModeEnum } from "./traininginputmodeenum";


// ChannelSpecification
/** 
 * Defines a named input source, called a channel, to be used by an algorithm.
**/
export class ChannelSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsRequired" })
  isRequired?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SupportedCompressionTypes" })
  supportedCompressionTypes?: CompressionTypeEnum[];

  @Metadata({ data: "json, name=SupportedContentTypes" })
  supportedContentTypes: string[];

  @Metadata({ data: "json, name=SupportedInputModes" })
  supportedInputModes: TrainingInputModeEnum[];
}
