import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInstance } from "./serviceinstance";



export class UpdateServiceInstanceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceInstance" })
  serviceInstance: ServiceInstance;
}
