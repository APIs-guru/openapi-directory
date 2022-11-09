import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricHeader } from "./metricheader";


// ColumnHeader
/** 
 * Column headers.
**/
export class ColumnHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=metricHeader" })
  metricHeader?: MetricHeader;
}
