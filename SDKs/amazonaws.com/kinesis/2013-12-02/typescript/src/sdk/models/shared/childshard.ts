import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HashKeyRange } from "./hashkeyrange";


export class ChildShard extends SpeakeasyBase {
  @Metadata({ data: "json, name=HashKeyRange" })
  hashKeyRange: HashKeyRange;

  @Metadata({ data: "json, name=ParentShards" })
  parentShards: string[];

  @Metadata({ data: "json, name=ShardId" })
  shardId: string;
}
