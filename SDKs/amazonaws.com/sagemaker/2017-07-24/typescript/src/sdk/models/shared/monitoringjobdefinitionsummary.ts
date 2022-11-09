import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringJobDefinitionSummary
/** 
 * Summary information about a monitoring job.
**/
export class MonitoringJobDefinitionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @Metadata({ data: "json, name=MonitoringJobDefinitionArn" })
  monitoringJobDefinitionArn: string;

  @Metadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName: string;
}
