import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerService } from "./containerservice";


export class CreateContainerServiceDeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerService" })
  containerService?: ContainerService;
}
