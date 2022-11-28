import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInstance } from "./serviceinstance";



export class GetServiceInstanceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceInstance" })
  serviceInstance: ServiceInstance;
}
