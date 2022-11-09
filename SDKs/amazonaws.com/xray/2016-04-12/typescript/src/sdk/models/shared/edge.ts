import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alias } from "./alias";
import { HistogramEntry } from "./histogramentry";
import { EdgeStatistics } from "./edgestatistics";


// Edge
/** 
 * Information about a connection between two services.
**/
export class Edge extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aliases", elemType: shared.Alias })
  aliases?: Alias[];

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: number;

  @Metadata({ data: "json, name=ResponseTimeHistogram", elemType: shared.HistogramEntry })
  responseTimeHistogram?: HistogramEntry[];

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=SummaryStatistics" })
  summaryStatistics?: EdgeStatistics;
}
