import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>DescribeStream</code>.
**/
export declare class DescribeStreamInput extends SpeakeasyBase {
    exclusiveStartShardId?: string;
    limit?: number;
    streamName: string;
}
