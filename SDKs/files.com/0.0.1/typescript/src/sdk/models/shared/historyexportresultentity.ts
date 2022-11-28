import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistoryExportResultEntity
/** 
 * List History Export Results
**/
export class HistoryExportResultEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=failure_type" })
  failureType?: string;

  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: number;

  @SpeakeasyMetadata({ data: "json, name=folder" })
  folder?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=target_expires_at" })
  targetExpiresAt?: number;

  @SpeakeasyMetadata({ data: "json, name=target_id" })
  targetId?: number;

  @SpeakeasyMetadata({ data: "json, name=target_name" })
  targetName?: string;

  @SpeakeasyMetadata({ data: "json, name=target_permission" })
  targetPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=target_permission_set" })
  targetPermissionSet?: string;

  @SpeakeasyMetadata({ data: "json, name=target_platform" })
  targetPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=target_recursive" })
  targetRecursive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_user_id" })
  targetUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=target_username" })
  targetUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
