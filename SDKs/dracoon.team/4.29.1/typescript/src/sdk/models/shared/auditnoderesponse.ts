import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditUserPermission } from "./audituserpermission";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";


// AuditNodeResponse
/** 
 * Audit node report
**/
export class AuditNodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditUserPermissionList", elemType: shared.AuditUserPermission })
  auditUserPermissionList: AuditUserPermission[];

  @Metadata({ data: "json, name=nodeCntChildren" })
  nodeCntChildren: number;

  @Metadata({ data: "json, name=nodeCreatedAt" })
  nodeCreatedAt?: Date;

  @Metadata({ data: "json, name=nodeCreatedBy" })
  nodeCreatedBy?: UserInfo;

  @Metadata({ data: "json, name=nodeHasActivitiesLog" })
  nodeHasActivitiesLog?: boolean;

  @Metadata({ data: "json, name=nodeHasRecycleBin" })
  nodeHasRecycleBin?: boolean;

  @Metadata({ data: "json, name=nodeId" })
  nodeId: number;

  @Metadata({ data: "json, name=nodeIsEncrypted" })
  nodeIsEncrypted?: boolean;

  @Metadata({ data: "json, name=nodeName" })
  nodeName: string;

  @Metadata({ data: "json, name=nodeParentId" })
  nodeParentId?: number;

  @Metadata({ data: "json, name=nodeParentPath" })
  nodeParentPath: string;

  @Metadata({ data: "json, name=nodeQuota" })
  nodeQuota?: number;

  @Metadata({ data: "json, name=nodeRecycleBinRetentionPeriod" })
  nodeRecycleBinRetentionPeriod?: number;

  @Metadata({ data: "json, name=nodeSize" })
  nodeSize?: number;

  @Metadata({ data: "json, name=nodeUpdatedAt" })
  nodeUpdatedAt?: Date;

  @Metadata({ data: "json, name=nodeUpdatedBy" })
  nodeUpdatedBy?: UserInfo;
}
