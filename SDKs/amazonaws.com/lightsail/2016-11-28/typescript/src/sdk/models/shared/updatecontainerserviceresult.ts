import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerService } from "./containerservice";


export class UpdateContainerServiceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerService" })
  containerService?: ContainerService;
}
