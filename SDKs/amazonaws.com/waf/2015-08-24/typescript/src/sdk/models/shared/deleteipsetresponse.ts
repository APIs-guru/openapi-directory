import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteIpSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
