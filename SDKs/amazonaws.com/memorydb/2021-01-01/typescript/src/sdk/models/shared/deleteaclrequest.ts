import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLName" })
  aclName: string;
}
