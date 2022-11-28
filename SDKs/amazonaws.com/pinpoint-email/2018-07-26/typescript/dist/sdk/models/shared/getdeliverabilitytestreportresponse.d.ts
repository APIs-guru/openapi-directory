import { SpeakeasyBase } from "../../../internal/utils";
import { DeliverabilityTestReport } from "./deliverabilitytestreport";
import { IspPlacement } from "./ispplacement";
import { PlacementStatistics } from "./placementstatistics";
import { Tag } from "./tag";
/**
 * The results of the predictive inbox placement test.
**/
export declare class GetDeliverabilityTestReportResponse extends SpeakeasyBase {
    deliverabilityTestReport: DeliverabilityTestReport;
    ispPlacements: IspPlacement[];
    message?: string;
    overallPlacement: PlacementStatistics;
    tags?: Tag[];
}
