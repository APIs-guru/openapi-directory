import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdatePartnerStatusActionEnum {
    UpdatePartnerStatus = "UpdatePartnerStatus"
}
export declare enum PostUpdatePartnerStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostUpdatePartnerStatusQueryParams extends SpeakeasyBase {
    action: PostUpdatePartnerStatusActionEnum;
    version: PostUpdatePartnerStatusVersionEnum;
}
export declare class PostUpdatePartnerStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdatePartnerStatusRequest extends SpeakeasyBase {
    queryParams: PostUpdatePartnerStatusQueryParams;
    headers: PostUpdatePartnerStatusHeaders;
    request?: Uint8Array;
}
export declare class PostUpdatePartnerStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
