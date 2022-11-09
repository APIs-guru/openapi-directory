import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceInfo } from "./serviceinfo";


export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Services", elemType: shared.ServiceInfo })
  services?: ServiceInfo[];
}
