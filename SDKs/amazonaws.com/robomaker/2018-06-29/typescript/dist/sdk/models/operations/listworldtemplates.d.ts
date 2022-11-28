import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorldTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListWorldTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorldTemplatesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWorldTemplatesRequest extends SpeakeasyBase {
    queryParams: ListWorldTemplatesQueryParams;
    headers: ListWorldTemplatesHeaders;
    request: ListWorldTemplatesRequestBody;
}
export declare class ListWorldTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listWorldTemplatesResponse?: shared.ListWorldTemplatesResponse;
    statusCode: number;
    throttlingException?: any;
}
