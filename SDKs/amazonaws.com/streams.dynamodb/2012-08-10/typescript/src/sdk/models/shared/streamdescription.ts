import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeySchemaElement } from "./keyschemaelement";
import { Shard } from "./shard";
import { StreamStatusEnum } from "./streamstatusenum";
import { StreamViewTypeEnum } from "./streamviewtypeenum";


// StreamDescription
/** 
 * Represents all of the data describing a particular stream.
**/
export class StreamDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationRequestDateTime" })
  creationRequestDateTime?: Date;

  @Metadata({ data: "json, name=KeySchema", elemType: shared.KeySchemaElement })
  keySchema?: KeySchemaElement[];

  @Metadata({ data: "json, name=LastEvaluatedShardId" })
  lastEvaluatedShardId?: string;

  @Metadata({ data: "json, name=Shards", elemType: shared.Shard })
  shards?: Shard[];

  @Metadata({ data: "json, name=StreamArn" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamLabel" })
  streamLabel?: string;

  @Metadata({ data: "json, name=StreamStatus" })
  streamStatus?: StreamStatusEnum;

  @Metadata({ data: "json, name=StreamViewType" })
  streamViewType?: StreamViewTypeEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;
}
