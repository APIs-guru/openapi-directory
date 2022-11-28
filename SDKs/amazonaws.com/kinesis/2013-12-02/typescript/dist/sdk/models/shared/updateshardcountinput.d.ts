import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";
export declare class UpdateShardCountInput extends SpeakeasyBase {
    scalingType: ScalingTypeEnum;
    streamName: string;
    targetShardCount: number;
}
