import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerService } from "./containerservice";



export class ContainerServicesListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerServices", elemType: ContainerService })
  containerServices?: ContainerService[];
}
