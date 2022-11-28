import { SpeakeasyBase } from "../../../internal/utils";
import { ShardFilterTypeEnum } from "./shardfiltertypeenum";
export declare class ShardFilter extends SpeakeasyBase {
    shardId?: string;
    timestamp?: Date;
    type: ShardFilterTypeEnum;
}
