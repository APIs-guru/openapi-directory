import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingClipboardModeEnum } from "./streamingclipboardmodeenum";
import { StreamingInstanceTypeEnum } from "./streaminginstancetypeenum";
/**
 * A configuration for a streaming session.
**/
export declare class StreamConfiguration extends SpeakeasyBase {
    clipboardMode?: StreamingClipboardModeEnum;
    ec2InstanceTypes?: StreamingInstanceTypeEnum[];
    maxSessionLengthInMinutes?: number;
    streamingImageIds?: string[];
}
