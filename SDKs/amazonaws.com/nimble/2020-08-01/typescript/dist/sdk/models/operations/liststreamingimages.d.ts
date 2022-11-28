import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamingImagesPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class ListStreamingImagesQueryParams extends SpeakeasyBase {
    nextToken?: string;
    owner?: string;
}
export declare class ListStreamingImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingImagesRequest extends SpeakeasyBase {
    pathParams: ListStreamingImagesPathParams;
    queryParams: ListStreamingImagesQueryParams;
    headers: ListStreamingImagesHeaders;
}
export declare class ListStreamingImagesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listStreamingImagesResponse?: shared.ListStreamingImagesResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
