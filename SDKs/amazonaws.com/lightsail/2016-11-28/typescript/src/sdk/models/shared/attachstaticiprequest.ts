import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachStaticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName: string;

  @SpeakeasyMetadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
