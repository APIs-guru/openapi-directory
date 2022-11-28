import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PagesHttpsCertificateStateEnum {
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


export class PagesHttpsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=domains" })
  domains: any[];

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PagesHttpsCertificateStateEnum;
}
