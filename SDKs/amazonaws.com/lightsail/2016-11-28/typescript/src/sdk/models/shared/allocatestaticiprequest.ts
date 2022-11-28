import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllocateStaticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
