import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortInfo } from "./portinfo";


export class PutInstancePublicPortsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;

  @Metadata({ data: "json, name=portInfos", elemType: shared.PortInfo })
  portInfos: PortInfo[];
}
