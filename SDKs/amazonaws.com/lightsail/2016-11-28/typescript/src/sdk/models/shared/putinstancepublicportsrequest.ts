import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortInfo } from "./portinfo";



export class PutInstancePublicPortsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;

  @SpeakeasyMetadata({ data: "json, name=portInfos", elemType: PortInfo })
  portInfos: PortInfo[];
}
