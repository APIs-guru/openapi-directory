import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { EndpointRequest } from "./endpointrequest";
export declare class CreateContainerServiceDeploymentRequest extends SpeakeasyBase {
    containers?: Map<string, Container>;
    publicEndpoint?: EndpointRequest;
    serviceName: string;
}
