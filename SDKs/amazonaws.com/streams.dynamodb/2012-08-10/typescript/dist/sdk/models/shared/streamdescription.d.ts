import { SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Shard } from "./shard";
import { StreamStatusEnum } from "./streamstatusenum";
import { StreamViewTypeEnum } from "./streamviewtypeenum";
/**
 * Represents all of the data describing a particular stream.
**/
export declare class StreamDescription extends SpeakeasyBase {
    creationRequestDateTime?: Date;
    keySchema?: KeySchemaElement[];
    lastEvaluatedShardId?: string;
    shards?: Shard[];
    streamArn?: string;
    streamLabel?: string;
    streamStatus?: StreamStatusEnum;
    streamViewType?: StreamViewTypeEnum;
    tableName?: string;
}
