import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeStream</code> operation.
**/
export declare class DescribeStreamInput extends SpeakeasyBase {
    exclusiveStartShardId?: string;
    limit?: number;
    streamArn: string;
}
