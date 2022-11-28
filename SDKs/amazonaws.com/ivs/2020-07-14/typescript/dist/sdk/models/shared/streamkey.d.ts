import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object specifying a stream key.
**/
export declare class StreamKey extends SpeakeasyBase {
    arn?: string;
    channelArn?: string;
    tags?: Map<string, string>;
    value?: string;
}
