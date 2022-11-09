import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { ContainerServiceEndpoint } from "./containerserviceendpoint";
import { ContainerServiceDeploymentStateEnum } from "./containerservicedeploymentstateenum";


// ContainerServiceDeployment
/** 
 * <p>Describes a container deployment configuration of an Amazon Lightsail container service.</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p>
**/
export class ContainerServiceDeployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Map<string, Container>;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=publicEndpoint" })
  publicEndpoint?: ContainerServiceEndpoint;

  @Metadata({ data: "json, name=state" })
  state?: ContainerServiceDeploymentStateEnum;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
