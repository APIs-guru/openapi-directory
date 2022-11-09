import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLName" })
  aclName: string;

  @Metadata({ data: "json, name=UserNamesToAdd" })
  userNamesToAdd?: string[];

  @Metadata({ data: "json, name=UserNamesToRemove" })
  userNamesToRemove?: string[];
}
