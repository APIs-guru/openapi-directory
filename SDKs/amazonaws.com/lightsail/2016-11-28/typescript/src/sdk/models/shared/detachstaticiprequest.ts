import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachStaticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
