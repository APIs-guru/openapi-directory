import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIpSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IPSetId" })
  ipSetId: string;
}
