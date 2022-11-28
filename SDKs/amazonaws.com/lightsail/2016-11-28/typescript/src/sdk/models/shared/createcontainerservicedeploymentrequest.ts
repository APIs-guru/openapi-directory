import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { EndpointRequest } from "./endpointrequest";



export class CreateContainerServiceDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Map<string, Container>;

  @SpeakeasyMetadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: EndpointRequest;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
