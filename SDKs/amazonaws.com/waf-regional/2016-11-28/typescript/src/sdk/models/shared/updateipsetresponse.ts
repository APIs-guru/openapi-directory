import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateIpSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
