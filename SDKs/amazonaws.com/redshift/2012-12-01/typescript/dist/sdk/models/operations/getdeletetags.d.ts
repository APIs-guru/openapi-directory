import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTagsActionEnum {
    DeleteTags = "DeleteTags"
}
export declare enum GetDeleteTagsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteTagsQueryParams extends SpeakeasyBase {
    action: GetDeleteTagsActionEnum;
    resourceName: string;
    tagKeys: string[];
    version: GetDeleteTagsVersionEnum;
}
export declare class GetDeleteTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTagsRequest extends SpeakeasyBase {
    queryParams: GetDeleteTagsQueryParams;
    headers: GetDeleteTagsHeaders;
}
export declare class GetDeleteTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
