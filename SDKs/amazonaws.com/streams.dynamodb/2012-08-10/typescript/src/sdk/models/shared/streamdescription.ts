import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchemaElement } from "./keyschemaelement";
import { Shard } from "./shard";
import { StreamStatusEnum } from "./streamstatusenum";
import { StreamViewTypeEnum } from "./streamviewtypeenum";



// StreamDescription
/** 
 * Represents all of the data describing a particular stream.
**/
export class StreamDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationRequestDateTime" })
  creationRequestDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=KeySchema", elemType: KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedShardId" })
  lastEvaluatedShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=Shards", elemType: Shard })
  shards?: Shard[];

  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamLabel" })
  streamLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamStatus" })
  streamStatus?: StreamStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamViewType" })
  streamViewType?: StreamViewTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;
}
