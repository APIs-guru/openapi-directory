import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortInfo } from "./portinfo";



export class OpenInstancePublicPortsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;

  @SpeakeasyMetadata({ data: "json, name=portInfo" })
  portInfo: PortInfo;
}
