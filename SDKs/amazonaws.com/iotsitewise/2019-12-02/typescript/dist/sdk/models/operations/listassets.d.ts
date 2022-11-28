import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAssetsFilterEnum {
    All = "ALL",
    TopLevel = "TOP_LEVEL"
}
export declare class ListAssetsQueryParams extends SpeakeasyBase {
    assetModelId?: string;
    filter?: ListAssetsFilterEnum;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssetsRequest extends SpeakeasyBase {
    queryParams: ListAssetsQueryParams;
    headers: ListAssetsHeaders;
}
export declare class ListAssetsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAssetsResponse?: shared.ListAssetsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
