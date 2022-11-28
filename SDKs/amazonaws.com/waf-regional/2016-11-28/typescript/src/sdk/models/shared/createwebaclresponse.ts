import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebAcl } from "./webacl";



export class CreateWebAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WebACL" })
  webAcl?: WebAcl;
}
