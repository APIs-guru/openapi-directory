import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminRemoveAuthorizedSshKeyRequestBody extends SpeakeasyBase {
    authorizedKey: string;
}
export declare class EnterpriseAdminRemoveAuthorizedSshKeyRequest extends SpeakeasyBase {
    request?: EnterpriseAdminRemoveAuthorizedSshKeyRequestBody;
}
export declare class EnterpriseAdminRemoveAuthorizedSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sshKeys?: shared.SshKey[];
}
