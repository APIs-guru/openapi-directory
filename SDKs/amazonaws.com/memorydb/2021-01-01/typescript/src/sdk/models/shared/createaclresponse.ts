import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Acl } from "./acl";


export class CreateAclResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACL" })
  acl?: Acl;
}
