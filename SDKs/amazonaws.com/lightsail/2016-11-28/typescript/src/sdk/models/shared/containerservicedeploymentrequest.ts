import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { EndpointRequest } from "./endpointrequest";



// ContainerServiceDeploymentRequest
/** 
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
export class ContainerServiceDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Map<string, Container>;

  @SpeakeasyMetadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: EndpointRequest;
}
