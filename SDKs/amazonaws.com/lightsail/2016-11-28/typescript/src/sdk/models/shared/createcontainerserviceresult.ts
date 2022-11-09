import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerService } from "./containerservice";


export class CreateContainerServiceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerService" })
  containerService?: ContainerService;
}
