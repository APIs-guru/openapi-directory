import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLName" })
  aclName: string;

  @SpeakeasyMetadata({ data: "json, name=UserNamesToAdd" })
  userNamesToAdd?: string[];

  @SpeakeasyMetadata({ data: "json, name=UserNamesToRemove" })
  userNamesToRemove?: string[];
}
