import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyCertificatesActionEnum {
    ModifyCertificates = "ModifyCertificates"
}
export declare enum PostModifyCertificatesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyCertificatesQueryParams extends SpeakeasyBase {
    action: PostModifyCertificatesActionEnum;
    version: PostModifyCertificatesVersionEnum;
}
export declare class PostModifyCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyCertificatesRequest extends SpeakeasyBase {
    queryParams: PostModifyCertificatesQueryParams;
    headers: PostModifyCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostModifyCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
