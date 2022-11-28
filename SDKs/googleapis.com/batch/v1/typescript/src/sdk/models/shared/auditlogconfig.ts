import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuditLogConfigLogTypeEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    AdminRead = "ADMIN_READ",
    DataWrite = "DATA_WRITE",
    DataRead = "DATA_READ"
}


// AuditLogConfig
/** 
 * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
**/
export class AuditLogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exemptedMembers" })
  exemptedMembers?: string[];

  @SpeakeasyMetadata({ data: "json, name=logType" })
  logType?: AuditLogConfigLogTypeEnum;
}
