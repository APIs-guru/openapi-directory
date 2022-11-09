import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachStaticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceName" })
  instanceName: string;

  @Metadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
