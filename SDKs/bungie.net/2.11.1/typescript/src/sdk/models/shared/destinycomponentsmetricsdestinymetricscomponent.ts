import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsMetricsDestinyMetricComponent } from "./destinycomponentsmetricsdestinymetriccomponent";



export class DestinyComponentsMetricsDestinyMetricsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsMetricsDestinyMetricComponent })
  metrics?: Map<string, DestinyComponentsMetricsDestinyMetricComponent>;

  @SpeakeasyMetadata()
  metricsRootNodeHash?: number;
}
