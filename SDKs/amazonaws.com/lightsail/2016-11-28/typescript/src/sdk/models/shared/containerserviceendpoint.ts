import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServiceHealthCheckConfig } from "./containerservicehealthcheckconfig";


// ContainerServiceEndpoint
/** 
 * Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
**/
export class ContainerServiceEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: ContainerServiceHealthCheckConfig;
}
