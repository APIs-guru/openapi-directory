import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightImpactGraphService } from "./insightimpactgraphservice";


export class GetInsightImpactGraphResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InsightId" })
  insightId?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceGraphEndTime" })
  serviceGraphEndTime?: Date;

  @Metadata({ data: "json, name=ServiceGraphStartTime" })
  serviceGraphStartTime?: Date;

  @Metadata({ data: "json, name=Services", elemType: shared.InsightImpactGraphService })
  services?: InsightImpactGraphService[];

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
