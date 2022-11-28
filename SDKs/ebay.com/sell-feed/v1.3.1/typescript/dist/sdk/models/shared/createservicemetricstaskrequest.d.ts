import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";
/**
 * The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
**/
export declare class CreateServiceMetricsTaskRequest extends SpeakeasyBase {
    feedType?: string;
    filterCriteria?: CustomerServiceMetricsFilterCriteria;
    schemaVersion?: string;
}
