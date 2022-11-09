import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllocateStaticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
