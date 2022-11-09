import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateWebAclResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
