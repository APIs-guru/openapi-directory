import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUntagResourceActionEnum {
    UntagResource = "UntagResource"
}
export declare enum GetUntagResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetUntagResourceQueryParams extends SpeakeasyBase {
    action: GetUntagResourceActionEnum;
    resourceArn: string;
    tagKeys: string[];
    version: GetUntagResourceVersionEnum;
}
export declare class GetUntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagResourceRequest extends SpeakeasyBase {
    queryParams: GetUntagResourceQueryParams;
    headers: GetUntagResourceHeaders;
}
export declare class GetUntagResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
