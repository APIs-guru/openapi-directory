import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStaticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
