import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Acl } from "./acl";



export class UpdateAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACL" })
  acl?: Acl;
}
