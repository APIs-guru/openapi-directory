import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentPermissionTypeEnum } from "./documentpermissiontypeenum";


export class ModifyDocumentPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIdsToAdd" })
  accountIdsToAdd?: string[];

  @Metadata({ data: "json, name=AccountIdsToRemove" })
  accountIdsToRemove?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=PermissionType" })
  permissionType: DocumentPermissionTypeEnum;

  @Metadata({ data: "json, name=SharedDocumentVersion" })
  sharedDocumentVersion?: string;
}
