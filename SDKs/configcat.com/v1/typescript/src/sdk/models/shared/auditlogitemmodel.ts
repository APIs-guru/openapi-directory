import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuditLogItemModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionTarget" })
  actionTarget?: string;

  @Metadata({ data: "json, name=auditLogDateTime" })
  auditLogDateTime?: Date;

  @Metadata({ data: "json, name=auditLogId" })
  auditLogId?: number;

  @Metadata({ data: "json, name=auditLogType" })
  auditLogType?: string;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;

  @Metadata({ data: "json, name=where" })
  where?: string;

  @Metadata({ data: "json, name=why" })
  why?: string;
}
