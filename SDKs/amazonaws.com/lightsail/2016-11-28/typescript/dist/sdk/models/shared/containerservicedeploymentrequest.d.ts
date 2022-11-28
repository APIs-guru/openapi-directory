import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { EndpointRequest } from "./endpointrequest";
/**
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
export declare class ContainerServiceDeploymentRequest extends SpeakeasyBase {
    containers?: Map<string, Container>;
    publicEndpoint?: EndpointRequest;
}
