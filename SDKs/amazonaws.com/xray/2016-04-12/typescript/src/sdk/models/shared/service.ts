import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistogramEntry } from "./histogramentry";
import { Edge } from "./edge";
import { ServiceStatistics } from "./servicestatistics";



// Service
/** 
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=DurationHistogram", elemType: HistogramEntry })
  durationHistogram?: HistogramEntry[];

  @SpeakeasyMetadata({ data: "json, name=Edges", elemType: Edge })
  edges?: Edge[];

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReferenceId" })
  referenceId?: number;

  @SpeakeasyMetadata({ data: "json, name=ResponseTimeHistogram", elemType: HistogramEntry })
  responseTimeHistogram?: HistogramEntry[];

  @SpeakeasyMetadata({ data: "json, name=Root" })
  root?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=SummaryStatistics" })
  summaryStatistics?: ServiceStatistics;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
