import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingThresholds } from "./autoscalingthresholds";



export class SetLoadBasedAutoScalingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DownScaling" })
  downScaling?: AutoScalingThresholds;

  @SpeakeasyMetadata({ data: "json, name=Enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId: string;

  @SpeakeasyMetadata({ data: "json, name=UpScaling" })
  upScaling?: AutoScalingThresholds;
}
