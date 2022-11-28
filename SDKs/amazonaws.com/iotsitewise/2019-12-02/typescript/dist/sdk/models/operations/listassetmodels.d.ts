import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssetModelsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAssetModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAssetModelsRequest extends SpeakeasyBase {
    queryParams: ListAssetModelsQueryParams;
    headers: ListAssetModelsHeaders;
}
export declare class ListAssetModelsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAssetModelsResponse?: shared.ListAssetModelsResponse;
    statusCode: number;
    throttlingException?: any;
}
