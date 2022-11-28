import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomMetric } from "./custommetric";



// CustomMetrics
/** 
 * A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
**/
export class CustomMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CustomMetric })
  items?: CustomMetric[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
