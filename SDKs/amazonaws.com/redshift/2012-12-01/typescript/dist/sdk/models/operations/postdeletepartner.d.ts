import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeletePartnerActionEnum {
    DeletePartner = "DeletePartner"
}
export declare enum PostDeletePartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeletePartnerQueryParams extends SpeakeasyBase {
    action: PostDeletePartnerActionEnum;
    version: PostDeletePartnerVersionEnum;
}
export declare class PostDeletePartnerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeletePartnerRequest extends SpeakeasyBase {
    queryParams: PostDeletePartnerQueryParams;
    headers: PostDeletePartnerHeaders;
    request?: Uint8Array;
}
export declare class PostDeletePartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
