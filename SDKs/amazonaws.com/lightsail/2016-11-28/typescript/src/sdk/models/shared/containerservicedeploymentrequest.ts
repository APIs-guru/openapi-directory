import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { EndpointRequest } from "./endpointrequest";


// ContainerServiceDeploymentRequest
/** 
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
export class ContainerServiceDeploymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Map<string, Container>;

  @Metadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: EndpointRequest;
}
