import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteIpSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=IPSetId" })
  ipSetId: string;
}
