import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateHsmClientCertificateActionEnum {
    CreateHsmClientCertificate = "CreateHsmClientCertificate"
}
export declare enum PostCreateHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateHsmClientCertificateQueryParams extends SpeakeasyBase {
    action: PostCreateHsmClientCertificateActionEnum;
    version: PostCreateHsmClientCertificateVersionEnum;
}
export declare class PostCreateHsmClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateHsmClientCertificateRequest extends SpeakeasyBase {
    queryParams: PostCreateHsmClientCertificateQueryParams;
    headers: PostCreateHsmClientCertificateHeaders;
    request?: Uint8Array;
}
export declare class PostCreateHsmClientCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
