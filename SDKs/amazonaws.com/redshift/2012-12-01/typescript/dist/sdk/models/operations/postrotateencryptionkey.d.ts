import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRotateEncryptionKeyActionEnum {
    RotateEncryptionKey = "RotateEncryptionKey"
}
export declare enum PostRotateEncryptionKeyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRotateEncryptionKeyQueryParams extends SpeakeasyBase {
    action: PostRotateEncryptionKeyActionEnum;
    version: PostRotateEncryptionKeyVersionEnum;
}
export declare class PostRotateEncryptionKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRotateEncryptionKeyRequest extends SpeakeasyBase {
    queryParams: PostRotateEncryptionKeyQueryParams;
    headers: PostRotateEncryptionKeyHeaders;
    request?: Uint8Array;
}
export declare class PostRotateEncryptionKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
