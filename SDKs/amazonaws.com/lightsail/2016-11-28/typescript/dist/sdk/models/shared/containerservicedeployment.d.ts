import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { ContainerServiceEndpoint } from "./containerserviceendpoint";
import { ContainerServiceDeploymentStateEnum } from "./containerservicedeploymentstateenum";
/**
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
export declare class ContainerServiceDeployment extends SpeakeasyBase {
    containers?: Map<string, Container>;
    createdAt?: Date;
    publicEndpoint?: ContainerServiceEndpoint;
    state?: ContainerServiceDeploymentStateEnum;
    version?: number;
}
