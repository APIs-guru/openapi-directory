import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerServiceMetricsFilterCriteria } from "./customerservicemetricsfiltercriteria";


// CreateServiceMetricsTaskRequest
/** 
 * The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
**/
export class CreateServiceMetricsTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedType" })
  feedType?: string;

  @Metadata({ data: "json, name=filterCriteria" })
  filterCriteria?: CustomerServiceMetricsFilterCriteria;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}
