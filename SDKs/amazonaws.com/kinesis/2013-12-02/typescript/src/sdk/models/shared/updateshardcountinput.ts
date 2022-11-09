import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";


export class UpdateShardCountInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScalingType" })
  scalingType: ScalingTypeEnum;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=TargetShardCount" })
  targetShardCount: number;
}
