import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStaticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticIpName" })
  staticIpName: string;
}
