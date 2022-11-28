import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// PublisherProvidedForecast
/** 
 * This message carries publisher provided forecasting information.
**/
export class PublisherProvidedForecast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=weeklyImpressions" })
  weeklyImpressions?: string;

  @SpeakeasyMetadata({ data: "json, name=weeklyUniques" })
  weeklyUniques?: string;
}
