import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerServiceDeployment } from "./containerservicedeployment";


export class GetContainerServiceDeploymentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployments", elemType: shared.ContainerServiceDeployment })
  deployments?: ContainerServiceDeployment[];
}
