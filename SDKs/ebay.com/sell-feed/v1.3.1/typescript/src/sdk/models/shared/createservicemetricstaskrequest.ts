import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";



// CreateServiceMetricsTaskRequest
/** 
 * The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
**/
export class CreateServiceMetricsTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "json, name=filterCriteria" })
  filterCriteria?: CustomerServiceMetricsFilterCriteria;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
