import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName: string;
}
