import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChannelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListChannelsRequestBody extends SpeakeasyBase {
    filterByName?: string;
    filterByRecordingConfigurationArn?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListChannelsRequest extends SpeakeasyBase {
    queryParams: ListChannelsQueryParams;
    headers: ListChannelsHeaders;
    request: ListChannelsRequestBody;
}
export declare class ListChannelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    listChannelsResponse?: shared.ListChannelsResponse;
    statusCode: number;
    validationException?: any;
}
