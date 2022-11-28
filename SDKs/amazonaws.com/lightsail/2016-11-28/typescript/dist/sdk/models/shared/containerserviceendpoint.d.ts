import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceHealthCheckConfig } from "./containerservicehealthcheckconfig";
/**
 * Describes the public endpoint configuration of a deployment of an Amazon Lightsail container service.
**/
export declare class ContainerServiceEndpoint extends SpeakeasyBase {
    containerName?: string;
    containerPort?: number;
    healthCheck?: ContainerServiceHealthCheckConfig;
}
