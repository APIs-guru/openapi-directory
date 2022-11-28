import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceHealthCheckConfig } from "./containerservicehealthcheckconfig";
/**
 * Describes the settings of a public endpoint for an Amazon Lightsail container service.
**/
export declare class EndpointRequest extends SpeakeasyBase {
    containerName: string;
    containerPort: number;
    healthCheck?: ContainerServiceHealthCheckConfig;
}
