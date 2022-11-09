import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliverabilityTestReport } from "./deliverabilitytestreport";
import { IspPlacement } from "./ispplacement";
import { PlacementStatistics } from "./placementstatistics";
import { Tag } from "./tag";


// GetDeliverabilityTestReportResponse
/** 
 * The results of the predictive inbox placement test.
**/
export class GetDeliverabilityTestReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliverabilityTestReport" })
  deliverabilityTestReport: DeliverabilityTestReport;

  @Metadata({ data: "json, name=IspPlacements", elemType: shared.IspPlacement })
  ispPlacements: IspPlacement[];

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OverallPlacement" })
  overallPlacement: PlacementStatistics;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
