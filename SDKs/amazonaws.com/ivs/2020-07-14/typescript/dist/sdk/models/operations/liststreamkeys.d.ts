import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamKeysQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListStreamKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamKeysRequestBody extends SpeakeasyBase {
    channelArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListStreamKeysRequest extends SpeakeasyBase {
    queryParams: ListStreamKeysQueryParams;
    headers: ListStreamKeysHeaders;
    request: ListStreamKeysRequestBody;
}
export declare class ListStreamKeysResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    listStreamKeysResponse?: shared.ListStreamKeysResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
