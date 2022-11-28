import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { HistogramEntry } from "./histogramentry";
import { EdgeStatistics } from "./edgestatistics";



// Edge
/** 
 * Information about a connection between two services.
**/
export class Edge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aliases", elemType: Alias })
  aliases?: Alias[];

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=ResponseTimeHistogram", elemType: HistogramEntry })
  responseTimeHistogram?: HistogramEntry[];

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SummaryStatistics" })
  summaryStatistics?: EdgeStatistics;
}
