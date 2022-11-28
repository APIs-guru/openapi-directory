import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuditLogItemModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionTarget" })
  actionTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=auditLogDateTime" })
  auditLogDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=auditLogId" })
  auditLogId?: number;

  @SpeakeasyMetadata({ data: "json, name=auditLogType" })
  auditLogType?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=where" })
  where?: string;

  @SpeakeasyMetadata({ data: "json, name=why" })
  why?: string;
}
