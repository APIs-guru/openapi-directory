import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddPartnerActionEnum {
    AddPartner = "AddPartner"
}
export declare enum PostAddPartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAddPartnerQueryParams extends SpeakeasyBase {
    action: PostAddPartnerActionEnum;
    version: PostAddPartnerVersionEnum;
}
export declare class PostAddPartnerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddPartnerRequest extends SpeakeasyBase {
    queryParams: PostAddPartnerQueryParams;
    headers: PostAddPartnerHeaders;
    request?: Uint8Array;
}
export declare class PostAddPartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
