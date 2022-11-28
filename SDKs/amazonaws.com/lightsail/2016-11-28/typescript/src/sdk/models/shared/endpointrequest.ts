import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceHealthCheckConfig } from "./containerservicehealthcheckconfig";



// EndpointRequest
/** 
 * Describes the settings of a public endpoint for an Amazon Lightsail container service.
**/
export class EndpointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort: number;

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: ContainerServiceHealthCheckConfig;
}
