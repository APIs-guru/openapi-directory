import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExternalEventEntityEventTypeEnum {
    LdapSync = "ldap_sync"
,    RemoteServerSync = "remote_server_sync"
,    Lockout = "lockout"
,    LdapLogin = "ldap_login"
,    SamlLogin = "saml_login"
,    ClientLog = "client_log"
,    PendingWork = "pending_work"
}

export enum ExternalEventEntityStatusEnum {
    Success = "success"
,    Error = "error"
,    PartialFailure = "partial_failure"
}


// ExternalEventEntity
/** 
 * List External Events
**/
export class ExternalEventEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=body_url" })
  bodyUrl?: string;

  @Metadata({ data: "json, name=bytes_synced" })
  bytesSynced?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=errored_files" })
  erroredFiles?: number;

  @Metadata({ data: "json, name=event_type" })
  eventType?: ExternalEventEntityEventTypeEnum;

  @Metadata({ data: "json, name=folder_behavior_id" })
  folderBehaviorId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=remote_server_type" })
  remoteServerType?: string;

  @Metadata({ data: "json, name=status" })
  status?: ExternalEventEntityStatusEnum;

  @Metadata({ data: "json, name=successful_files" })
  successfulFiles?: number;
}
