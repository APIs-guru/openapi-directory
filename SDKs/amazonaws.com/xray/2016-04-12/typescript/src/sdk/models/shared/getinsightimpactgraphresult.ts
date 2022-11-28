import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightImpactGraphService } from "./insightimpactgraphservice";



export class GetInsightImpactGraphResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InsightId" })
  insightId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceGraphEndTime" })
  serviceGraphEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceGraphStartTime" })
  serviceGraphStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: InsightImpactGraphService })
  services?: InsightImpactGraphService[];

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
