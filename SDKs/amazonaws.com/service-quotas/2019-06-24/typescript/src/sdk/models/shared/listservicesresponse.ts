import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInfo } from "./serviceinfo";



export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: ServiceInfo })
  services?: ServiceInfo[];
}
