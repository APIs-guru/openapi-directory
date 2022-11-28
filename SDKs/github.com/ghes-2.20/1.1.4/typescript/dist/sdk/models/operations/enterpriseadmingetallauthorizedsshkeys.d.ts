import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetAllAuthorizedSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sshKeys?: shared.SshKey[];
}
