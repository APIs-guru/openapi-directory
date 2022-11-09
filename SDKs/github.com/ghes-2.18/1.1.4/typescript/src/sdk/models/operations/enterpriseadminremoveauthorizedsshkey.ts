import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminRemoveAuthorizedSshKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_key" })
  authorizedKey: string;
}


export class EnterpriseAdminRemoveAuthorizedSshKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminRemoveAuthorizedSshKeyRequestBody;
}


export class EnterpriseAdminRemoveAuthorizedSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SshKey })
  sshKeys?: shared.SshKey[];
}
