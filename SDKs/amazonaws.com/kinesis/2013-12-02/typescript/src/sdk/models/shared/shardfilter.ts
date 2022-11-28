import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShardFilterTypeEnum } from "./shardfiltertypeenum";



export class ShardFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId?: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ShardFilterTypeEnum;
}
