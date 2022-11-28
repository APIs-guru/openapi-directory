import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HashKeyRange } from "./hashkeyrange";



export class ChildShard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HashKeyRange" })
  hashKeyRange: HashKeyRange;

  @SpeakeasyMetadata({ data: "json, name=ParentShards" })
  parentShards: string[];

  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId: string;
}
