import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";



export class UpdateShardCountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScalingType" })
  scalingType: ScalingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=TargetShardCount" })
  targetShardCount: number;
}
