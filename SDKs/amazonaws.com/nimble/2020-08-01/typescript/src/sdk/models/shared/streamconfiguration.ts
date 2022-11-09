import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamingClipboardModeEnum } from "./streamingclipboardmodeenum";
import { StreamingInstanceTypeEnum } from "./streaminginstancetypeenum";


// StreamConfiguration
/** 
 * A configuration for a streaming session.
**/
export class StreamConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=clipboardMode" })
  clipboardMode?: StreamingClipboardModeEnum;

  @Metadata({ data: "json, name=ec2InstanceTypes" })
  ec2InstanceTypes?: StreamingInstanceTypeEnum[];

  @Metadata({ data: "json, name=maxSessionLengthInMinutes" })
  maxSessionLengthInMinutes?: number;

  @Metadata({ data: "json, name=streamingImageIds" })
  streamingImageIds?: string[];
}
