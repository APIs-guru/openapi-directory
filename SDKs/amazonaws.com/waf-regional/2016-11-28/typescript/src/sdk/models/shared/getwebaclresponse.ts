import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebAcl } from "./webacl";


export class GetWebAclResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=WebACL" })
  webAcl?: WebAcl;
}
