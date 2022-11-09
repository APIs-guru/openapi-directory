import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRelatedItemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListRelatedItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRelatedItemsRequestBody extends SpeakeasyBase {
    incidentRecordArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRelatedItemsRequest extends SpeakeasyBase {
    queryParams: ListRelatedItemsQueryParams;
    headers: ListRelatedItemsHeaders;
    request: ListRelatedItemsRequestBody;
}
export declare class ListRelatedItemsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRelatedItemsOutput?: shared.ListRelatedItemsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
