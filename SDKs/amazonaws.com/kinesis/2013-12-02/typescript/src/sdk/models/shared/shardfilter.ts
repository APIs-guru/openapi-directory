import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardFilterTypeEnum } from "./shardfiltertypeenum";


export class ShardFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardId" })
  shardId?: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=Type" })
  type: ShardFilterTypeEnum;
}
