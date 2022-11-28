import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { BatchError } from "./batcherror";
export declare class BatchGetChannelResponse extends SpeakeasyBase {
    channels?: Channel[];
    errors?: BatchError[];
}
