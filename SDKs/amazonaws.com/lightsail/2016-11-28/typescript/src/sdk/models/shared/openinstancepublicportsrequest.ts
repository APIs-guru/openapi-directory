import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortInfo } from "./portinfo";


export class OpenInstancePublicPortsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;

  @Metadata({ data: "json, name=portInfo" })
  portInfo: PortInfo;
}
