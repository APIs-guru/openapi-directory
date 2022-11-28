import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExternalEventEntityEventTypeEnum {
    LdapSync = "ldap_sync",
    RemoteServerSync = "remote_server_sync",
    Lockout = "lockout",
    LdapLogin = "ldap_login",
    SamlLogin = "saml_login",
    ClientLog = "client_log",
    PendingWork = "pending_work"
}
export declare enum ExternalEventEntityStatusEnum {
    Success = "success",
    Error = "error",
    PartialFailure = "partial_failure"
}
/**
 * List External Events
**/
export declare class ExternalEventEntity extends SpeakeasyBase {
    body?: string;
    bodyUrl?: string;
    bytesSynced?: number;
    createdAt?: Date;
    erroredFiles?: number;
    eventType?: ExternalEventEntityEventTypeEnum;
    folderBehaviorId?: number;
    id?: number;
    remoteServerType?: string;
    status?: ExternalEventEntityStatusEnum;
    successfulFiles?: number;
}
