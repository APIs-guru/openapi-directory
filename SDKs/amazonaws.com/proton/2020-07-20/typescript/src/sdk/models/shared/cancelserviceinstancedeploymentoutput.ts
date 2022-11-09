import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceInstance } from "./serviceinstance";


export class CancelServiceInstanceDeploymentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceInstance" })
  serviceInstance: ServiceInstance;
}
