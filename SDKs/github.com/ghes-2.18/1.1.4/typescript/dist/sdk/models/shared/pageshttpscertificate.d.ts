import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PagesHttpsCertificateStateEnum {
    New = "new",
    AuthorizationCreated = "authorization_created",
    AuthorizationPending = "authorization_pending",
    Authorized = "authorized",
    AuthorizationRevoked = "authorization_revoked",
    Issued = "issued",
    Uploaded = "uploaded",
    Approved = "approved",
    Errored = "errored",
    BadAuthz = "bad_authz",
    DestroyPending = "destroy_pending",
    DnsChanged = "dns_changed"
}
export declare class PagesHttpsCertificate extends SpeakeasyBase {
    description: string;
    domains: any[];
    expiresAt?: Date;
    state: PagesHttpsCertificateStateEnum;
}
