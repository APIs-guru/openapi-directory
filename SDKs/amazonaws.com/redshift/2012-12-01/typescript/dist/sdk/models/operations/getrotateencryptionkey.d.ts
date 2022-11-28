import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRotateEncryptionKeyActionEnum {
    RotateEncryptionKey = "RotateEncryptionKey"
}
export declare enum GetRotateEncryptionKeyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRotateEncryptionKeyQueryParams extends SpeakeasyBase {
    action: GetRotateEncryptionKeyActionEnum;
    clusterIdentifier: string;
    version: GetRotateEncryptionKeyVersionEnum;
}
export declare class GetRotateEncryptionKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRotateEncryptionKeyRequest extends SpeakeasyBase {
    queryParams: GetRotateEncryptionKeyQueryParams;
    headers: GetRotateEncryptionKeyHeaders;
}
export declare class GetRotateEncryptionKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
