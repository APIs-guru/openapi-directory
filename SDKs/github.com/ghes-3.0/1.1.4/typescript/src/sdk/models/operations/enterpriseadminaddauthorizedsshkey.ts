import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminAddAuthorizedSshKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_key" })
  authorizedKey: string;
}


export class EnterpriseAdminAddAuthorizedSshKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminAddAuthorizedSshKeyRequestBody;
}


export class EnterpriseAdminAddAuthorizedSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SshKey })
  sshKeys?: shared.SshKey[];
}
