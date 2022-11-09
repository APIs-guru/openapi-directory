import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistogramEntry } from "./histogramentry";
import { Edge } from "./edge";
import { HistogramEntry } from "./histogramentry";
import { ServiceStatistics } from "./servicestatistics";


// Service
/** 
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=DurationHistogram", elemType: shared.HistogramEntry })
  durationHistogram?: HistogramEntry[];

  @Metadata({ data: "json, name=Edges", elemType: shared.Edge })
  edges?: Edge[];

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Names" })
  names?: string[];

  @Metadata({ data: "json, name=ReferenceId" })
  referenceId?: number;

  @Metadata({ data: "json, name=ResponseTimeHistogram", elemType: shared.HistogramEntry })
  responseTimeHistogram?: HistogramEntry[];

  @Metadata({ data: "json, name=Root" })
  root?: boolean;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=SummaryStatistics" })
  summaryStatistics?: ServiceStatistics;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
