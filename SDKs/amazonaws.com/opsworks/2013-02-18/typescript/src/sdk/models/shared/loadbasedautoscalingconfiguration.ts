import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingThresholds } from "./autoscalingthresholds";
import { AutoScalingThresholds } from "./autoscalingthresholds";


// LoadBasedAutoScalingConfiguration
/** 
 * Describes a layer's load-based auto scaling configuration.
**/
export class LoadBasedAutoScalingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DownScaling" })
  downScaling?: AutoScalingThresholds;

  @Metadata({ data: "json, name=Enable" })
  enable?: boolean;

  @Metadata({ data: "json, name=LayerId" })
  layerId?: string;

  @Metadata({ data: "json, name=UpScaling" })
  upScaling?: AutoScalingThresholds;
}
