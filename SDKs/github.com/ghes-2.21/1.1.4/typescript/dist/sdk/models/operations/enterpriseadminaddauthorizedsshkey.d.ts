import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminAddAuthorizedSshKeyRequestBody extends SpeakeasyBase {
    authorizedKey: string;
}
export declare class EnterpriseAdminAddAuthorizedSshKeyRequest extends SpeakeasyBase {
    request?: EnterpriseAdminAddAuthorizedSshKeyRequestBody;
}
export declare class EnterpriseAdminAddAuthorizedSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sshKeys?: shared.SshKey[];
}
