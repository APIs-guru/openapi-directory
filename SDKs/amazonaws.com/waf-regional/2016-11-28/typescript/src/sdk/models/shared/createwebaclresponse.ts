import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebAcl } from "./webacl";


export class CreateWebAclResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=WebACL" })
  webAcl?: WebAcl;
}
