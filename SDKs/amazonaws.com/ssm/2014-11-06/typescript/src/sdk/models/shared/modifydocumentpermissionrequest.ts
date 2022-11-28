import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentPermissionTypeEnum } from "./documentpermissiontypeenum";



export class ModifyDocumentPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIdsToAdd" })
  accountIdsToAdd?: string[];

  @SpeakeasyMetadata({ data: "json, name=AccountIdsToRemove" })
  accountIdsToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionType" })
  permissionType: DocumentPermissionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SharedDocumentVersion" })
  sharedDocumentVersion?: string;
}
