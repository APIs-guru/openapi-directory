import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the health check configuration of an Amazon Lightsail container service.
**/
export declare class ContainerServiceHealthCheckConfig extends SpeakeasyBase {
    healthyThreshold?: number;
    intervalSeconds?: number;
    path?: string;
    successCodes?: string;
    timeoutSeconds?: number;
    unhealthyThreshold?: number;
}
