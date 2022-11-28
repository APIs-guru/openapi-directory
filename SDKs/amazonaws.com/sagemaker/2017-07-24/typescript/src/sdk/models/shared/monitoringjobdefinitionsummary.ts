import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringJobDefinitionSummary
/** 
 * Summary information about a monitoring job.
**/
export class MonitoringJobDefinitionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionArn" })
  monitoringJobDefinitionArn: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName: string;
}
