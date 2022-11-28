import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditUserPermission } from "./audituserpermission";
import { UserInfo } from "./userinfo";



// AuditNodeResponse
/** 
 * Audit node report
**/
export class AuditNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditUserPermissionList", elemType: AuditUserPermission })
  auditUserPermissionList: AuditUserPermission[];

  @SpeakeasyMetadata({ data: "json, name=nodeCntChildren" })
  nodeCntChildren: number;

  @SpeakeasyMetadata({ data: "json, name=nodeCreatedAt" })
  nodeCreatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=nodeCreatedBy" })
  nodeCreatedBy?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=nodeHasActivitiesLog" })
  nodeHasActivitiesLog?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeHasRecycleBin" })
  nodeHasRecycleBin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId: number;

  @SpeakeasyMetadata({ data: "json, name=nodeIsEncrypted" })
  nodeIsEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeName" })
  nodeName: string;

  @SpeakeasyMetadata({ data: "json, name=nodeParentId" })
  nodeParentId?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeParentPath" })
  nodeParentPath: string;

  @SpeakeasyMetadata({ data: "json, name=nodeQuota" })
  nodeQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeRecycleBinRetentionPeriod" })
  nodeRecycleBinRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeSize" })
  nodeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeUpdatedAt" })
  nodeUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=nodeUpdatedBy" })
  nodeUpdatedBy?: UserInfo;
}
