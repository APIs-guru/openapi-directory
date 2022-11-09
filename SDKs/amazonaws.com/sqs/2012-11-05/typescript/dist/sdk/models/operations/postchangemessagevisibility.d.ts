import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostChangeMessageVisibilityActionEnum {
    ChangeMessageVisibility = "ChangeMessageVisibility"
}
export declare enum PostChangeMessageVisibilityVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostChangeMessageVisibilityQueryParams extends SpeakeasyBase {
    action: PostChangeMessageVisibilityActionEnum;
    version: PostChangeMessageVisibilityVersionEnum;
}
export declare class PostChangeMessageVisibilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostChangeMessageVisibilityRequest extends SpeakeasyBase {
    queryParams: PostChangeMessageVisibilityQueryParams;
    headers: PostChangeMessageVisibilityHeaders;
    request?: Uint8Array;
}
export declare class PostChangeMessageVisibilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
