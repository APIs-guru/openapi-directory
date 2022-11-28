import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStreamingImagePathParams extends SpeakeasyBase {
    streamingImageId: string;
    studioId: string;
}
export declare class GetStreamingImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamingImageRequest extends SpeakeasyBase {
    pathParams: GetStreamingImagePathParams;
    headers: GetStreamingImageHeaders;
}
export declare class GetStreamingImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getStreamingImageResponse?: shared.GetStreamingImageResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
