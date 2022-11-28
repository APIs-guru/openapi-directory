import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminAddAuthorizedSshKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_key" })
  authorizedKey: string;
}


export class EnterpriseAdminAddAuthorizedSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminAddAuthorizedSshKeyRequestBody;
}


export class EnterpriseAdminAddAuthorizedSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SshKey })
  sshKeys?: shared.SshKey[];
}
