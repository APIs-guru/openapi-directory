import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForResourcePathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    pathParams: ListTagsForResourcePathParams;
    headers: ListTagsForResourceHeaders;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
