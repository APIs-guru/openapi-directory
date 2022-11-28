import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllSshKeysQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetAllSshKeysRequest extends SpeakeasyBase {
    queryParams: GetAllSshKeysQueryParams;
}
export declare class GetAllSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    sshKeyDetails?: shared.SshKeyDetail[];
    statusCode: number;
}
