import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}
export declare enum GetRemoveTagsFromResourceVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GetRemoveTagsFromResourceQueryParams extends SpeakeasyBase {
    action: GetRemoveTagsFromResourceActionEnum;
    resourceName: string;
    tagKeys: string[];
    version: GetRemoveTagsFromResourceVersionEnum;
}
export declare class GetRemoveTagsFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveTagsFromResourceRequest extends SpeakeasyBase {
    queryParams: GetRemoveTagsFromResourceQueryParams;
    headers: GetRemoveTagsFromResourceHeaders;
}
export declare class GetRemoveTagsFromResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
