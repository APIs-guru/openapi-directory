import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Shard } from "./shard";



export class ListShardsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Shards", elemType: Shard })
  shards?: Shard[];
}
