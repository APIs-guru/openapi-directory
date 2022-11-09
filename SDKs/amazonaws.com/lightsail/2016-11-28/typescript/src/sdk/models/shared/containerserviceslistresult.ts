import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerService } from "./containerservice";


export class ContainerServicesListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerServices", elemType: shared.ContainerService })
  containerServices?: ContainerService[];
}
