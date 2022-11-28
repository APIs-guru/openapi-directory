import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}
export declare enum GetListTagsForResourceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetListTagsForResourceQueryParams extends SpeakeasyBase {
    action: GetListTagsForResourceActionEnum;
    resourceName: string;
    version: GetListTagsForResourceVersionEnum;
}
export declare class GetListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListTagsForResourceRequest extends SpeakeasyBase {
    queryParams: GetListTagsForResourceQueryParams;
    headers: GetListTagsForResourceHeaders;
}
export declare class GetListTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
