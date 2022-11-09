import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomMetric } from "./custommetric";


// CustomMetrics
/** 
 * A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
**/
export class CustomMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.CustomMetric })
  items?: CustomMetric[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
