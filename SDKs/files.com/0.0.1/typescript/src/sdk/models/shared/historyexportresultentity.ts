import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistoryExportResultEntity
/** 
 * List History Export Results
**/
export class HistoryExportResultEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=failure_type" })
  failureType?: string;

  @Metadata({ data: "json, name=file_id" })
  fileId?: number;

  @Metadata({ data: "json, name=folder" })
  folder?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=target_expires_at" })
  targetExpiresAt?: number;

  @Metadata({ data: "json, name=target_id" })
  targetId?: number;

  @Metadata({ data: "json, name=target_name" })
  targetName?: string;

  @Metadata({ data: "json, name=target_permission" })
  targetPermission?: string;

  @Metadata({ data: "json, name=target_permission_set" })
  targetPermissionSet?: string;

  @Metadata({ data: "json, name=target_platform" })
  targetPlatform?: string;

  @Metadata({ data: "json, name=target_recursive" })
  targetRecursive?: boolean;

  @Metadata({ data: "json, name=target_user_id" })
  targetUserId?: number;

  @Metadata({ data: "json, name=target_username" })
  targetUsername?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
