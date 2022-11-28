import { SpeakeasyBase } from "../../../internal/utils";
import { HashKeyRange } from "./hashkeyrange";
export declare class ChildShard extends SpeakeasyBase {
    hashKeyRange: HashKeyRange;
    parentShards: string[];
    shardId: string;
}
