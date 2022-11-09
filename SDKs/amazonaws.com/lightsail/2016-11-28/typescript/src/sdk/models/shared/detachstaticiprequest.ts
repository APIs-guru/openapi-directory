import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetachStaticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
