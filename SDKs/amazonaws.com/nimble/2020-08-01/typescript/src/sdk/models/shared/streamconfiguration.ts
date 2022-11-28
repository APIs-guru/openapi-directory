import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingClipboardModeEnum } from "./streamingclipboardmodeenum";
import { StreamingInstanceTypeEnum } from "./streaminginstancetypeenum";



// StreamConfiguration
/** 
 * A configuration for a streaming session.
**/
export class StreamConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clipboardMode" })
  clipboardMode?: StreamingClipboardModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ec2InstanceTypes" })
  ec2InstanceTypes?: StreamingInstanceTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=maxSessionLengthInMinutes" })
  maxSessionLengthInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=streamingImageIds" })
  streamingImageIds?: string[];
}
