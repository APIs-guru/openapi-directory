import { SpeakeasyBase } from "../../../internal/utils";
import { Shard } from "./shard";
export declare class ListShardsOutput extends SpeakeasyBase {
    nextToken?: string;
    shards?: Shard[];
}
