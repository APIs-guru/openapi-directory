import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



export class DestinyComponentsMetricsDestinyMetricComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  invisible?: boolean;

  @SpeakeasyMetadata()
  objectiveProgress?: DestinyQuestsDestinyObjectiveProgress;
}
