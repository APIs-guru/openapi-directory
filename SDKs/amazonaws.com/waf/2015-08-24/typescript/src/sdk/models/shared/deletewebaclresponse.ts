import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebAclResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
