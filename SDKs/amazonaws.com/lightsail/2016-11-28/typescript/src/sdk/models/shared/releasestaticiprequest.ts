import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReleaseStaticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
