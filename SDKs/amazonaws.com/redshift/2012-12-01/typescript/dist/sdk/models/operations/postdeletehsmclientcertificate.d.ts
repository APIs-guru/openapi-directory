import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteHsmClientCertificateActionEnum {
    DeleteHsmClientCertificate = "DeleteHsmClientCertificate"
}
export declare enum PostDeleteHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteHsmClientCertificateQueryParams extends SpeakeasyBase {
    action: PostDeleteHsmClientCertificateActionEnum;
    version: PostDeleteHsmClientCertificateVersionEnum;
}
export declare class PostDeleteHsmClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteHsmClientCertificateRequest extends SpeakeasyBase {
    queryParams: PostDeleteHsmClientCertificateQueryParams;
    headers: PostDeleteHsmClientCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteHsmClientCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
