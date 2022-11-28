import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMapsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListMapsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMapsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListMapsRequest extends SpeakeasyBase {
    queryParams: ListMapsQueryParams;
    headers: ListMapsHeaders;
    request: ListMapsRequestBody;
}
export declare class ListMapsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listMapsResponse?: shared.ListMapsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
