import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { TrainingInputModeEnum } from "./traininginputmodeenum";



// ChannelSpecification
/** 
 * Defines a named input source, called a channel, to be used by an algorithm.
**/
export class ChannelSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedCompressionTypes" })
  supportedCompressionTypes?: CompressionTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=SupportedContentTypes" })
  supportedContentTypes: string[];

  @SpeakeasyMetadata({ data: "json, name=SupportedInputModes" })
  supportedInputModes: TrainingInputModeEnum[];
}
