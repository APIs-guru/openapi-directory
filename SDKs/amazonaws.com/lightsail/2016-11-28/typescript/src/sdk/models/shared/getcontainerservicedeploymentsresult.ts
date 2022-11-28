import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeployment } from "./containerservicedeployment";



export class GetContainerServiceDeploymentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: ContainerServiceDeployment })
  deployments?: ContainerServiceDeployment[];
}
