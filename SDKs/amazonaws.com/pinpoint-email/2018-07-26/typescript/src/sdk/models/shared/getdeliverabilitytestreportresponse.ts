import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestReport } from "./deliverabilitytestreport";
import { IspPlacement } from "./ispplacement";
import { PlacementStatistics } from "./placementstatistics";
import { Tag } from "./tag";



// GetDeliverabilityTestReportResponse
/** 
 * The results of the predictive inbox placement test.
**/
export class GetDeliverabilityTestReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliverabilityTestReport" })
  deliverabilityTestReport: DeliverabilityTestReport;

  @SpeakeasyMetadata({ data: "json, name=IspPlacements", elemType: IspPlacement })
  ispPlacements: IspPlacement[];

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=OverallPlacement" })
  overallPlacement: PlacementStatistics;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
