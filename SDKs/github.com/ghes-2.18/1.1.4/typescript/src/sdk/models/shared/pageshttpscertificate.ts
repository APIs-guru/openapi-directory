import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PagesHttpsCertificateStateEnum {
    New = "new"
,    AuthorizationCreated = "authorization_created"
,    AuthorizationPending = "authorization_pending"
,    Authorized = "authorized"
,    AuthorizationRevoked = "authorization_revoked"
,    Issued = "issued"
,    Uploaded = "uploaded"
,    Approved = "approved"
,    Errored = "errored"
,    BadAuthz = "bad_authz"
,    DestroyPending = "destroy_pending"
,    DnsChanged = "dns_changed"
}


export class PagesHttpsCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=domains" })
  domains: any[];

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=state" })
  state: PagesHttpsCertificateStateEnum;
}
