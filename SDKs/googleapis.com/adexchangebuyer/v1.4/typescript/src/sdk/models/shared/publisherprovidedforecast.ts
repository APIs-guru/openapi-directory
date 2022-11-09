import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimension } from "./dimension";


// PublisherProvidedForecast
/** 
 * This message carries publisher provided forecasting information.
**/
export class PublisherProvidedForecast extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions", elemType: shared.Dimension })
  dimensions?: Dimension[];

  @Metadata({ data: "json, name=weeklyImpressions" })
  weeklyImpressions?: string;

  @Metadata({ data: "json, name=weeklyUniques" })
  weeklyUniques?: string;
}
