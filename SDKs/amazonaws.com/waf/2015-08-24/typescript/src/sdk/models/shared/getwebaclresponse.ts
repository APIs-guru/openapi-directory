import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebAcl } from "./webacl";



export class GetWebAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WebACL" })
  webAcl?: WebAcl;
}
