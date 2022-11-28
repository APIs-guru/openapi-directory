import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceHealthCheckConfig } from "./containerservicehealthcheckconfig";



// ContainerServiceEndpoint
/** 
 * Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
**/
export class ContainerServiceEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: ContainerServiceHealthCheckConfig;
}
