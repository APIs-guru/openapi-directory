import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSshKeyPathParams extends SpeakeasyBase {
    domainName: string;
    fingerprint: string;
}
export declare class DeleteSshKeyQueryParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteSshKeyRequest extends SpeakeasyBase {
    pathParams: DeleteSshKeyPathParams;
    queryParams: DeleteSshKeyQueryParams;
}
export declare class DeleteSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
