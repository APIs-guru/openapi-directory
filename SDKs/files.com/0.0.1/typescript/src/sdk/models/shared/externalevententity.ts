import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExternalEventEntityEventTypeEnum {
    LdapSync = "ldap_sync",
    RemoteServerSync = "remote_server_sync",
    Lockout = "lockout",
    LdapLogin = "ldap_login",
    SamlLogin = "saml_login",
    ClientLog = "client_log",
    PendingWork = "pending_work"
}

export enum ExternalEventEntityStatusEnum {
    Success = "success",
    Error = "error",
    PartialFailure = "partial_failure"
}


// ExternalEventEntity
/** 
 * List External Events
**/
export class ExternalEventEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=body_url" })
  bodyUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bytes_synced" })
  bytesSynced?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=errored_files" })
  erroredFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: ExternalEventEntityEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=folder_behavior_id" })
  folderBehaviorId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=remote_server_type" })
  remoteServerType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExternalEventEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=successful_files" })
  successfulFiles?: number;
}
