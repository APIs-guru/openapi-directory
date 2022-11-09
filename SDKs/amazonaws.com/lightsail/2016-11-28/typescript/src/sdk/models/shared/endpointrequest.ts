import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServiceHealthCheckConfig } from "./containerservicehealthcheckconfig";


// EndpointRequest
/** 
 * Describes the settings of a public endpoint for an Amazon Lightsail container service.
**/
export class EndpointRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName: string;

  @Metadata({ data: "json, name=containerPort" })
  containerPort: number;

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: ContainerServiceHealthCheckConfig;
}
