import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
