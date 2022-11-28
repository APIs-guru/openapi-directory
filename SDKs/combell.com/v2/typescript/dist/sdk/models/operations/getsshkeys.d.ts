import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSshKeysPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetSshKeysQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetSshKeysRequest extends SpeakeasyBase {
    pathParams: GetSshKeysPathParams;
    queryParams: GetSshKeysQueryParams;
}
export declare class GetSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    sshKeys?: shared.SshKey[];
    statusCode: number;
}
