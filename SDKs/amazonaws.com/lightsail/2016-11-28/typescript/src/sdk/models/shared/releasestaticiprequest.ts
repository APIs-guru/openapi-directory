import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReleaseStaticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
