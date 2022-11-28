import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerService } from "./containerservice";



export class CreateContainerServiceDeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerService" })
  containerService?: ContainerService;
}
