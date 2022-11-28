import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricHeader } from "./metricheader";



// ColumnHeader
/** 
 * Column headers.
**/
export class ColumnHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=metricHeader" })
  metricHeader?: MetricHeader;
}
