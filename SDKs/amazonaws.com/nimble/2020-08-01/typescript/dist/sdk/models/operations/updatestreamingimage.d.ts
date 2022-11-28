import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStreamingImagePathParams extends SpeakeasyBase {
    streamingImageId: string;
    studioId: string;
}
export declare class UpdateStreamingImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStreamingImageRequestBody extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare class UpdateStreamingImageRequest extends SpeakeasyBase {
    pathParams: UpdateStreamingImagePathParams;
    headers: UpdateStreamingImageHeaders;
    request: UpdateStreamingImageRequestBody;
}
export declare class UpdateStreamingImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateStreamingImageResponse?: shared.UpdateStreamingImageResponse;
    validationException?: any;
}
