import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRobotsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListRobotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRobotsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRobotsRequest extends SpeakeasyBase {
    queryParams: ListRobotsQueryParams;
    headers: ListRobotsHeaders;
    request: ListRobotsRequestBody;
}
export declare class ListRobotsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    listRobotsResponse?: shared.ListRobotsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
