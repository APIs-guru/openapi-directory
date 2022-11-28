import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminRemoveAuthorizedSshKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_key" })
  authorizedKey: string;
}


export class EnterpriseAdminRemoveAuthorizedSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminRemoveAuthorizedSshKeyRequestBody;
}


export class EnterpriseAdminRemoveAuthorizedSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SshKey })
  sshKeys?: shared.SshKey[];
}
