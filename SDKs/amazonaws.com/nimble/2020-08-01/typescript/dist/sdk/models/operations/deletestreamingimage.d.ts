import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStreamingImagePathParams extends SpeakeasyBase {
    streamingImageId: string;
    studioId: string;
}
export declare class DeleteStreamingImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamingImageRequest extends SpeakeasyBase {
    pathParams: DeleteStreamingImagePathParams;
    headers: DeleteStreamingImageHeaders;
}
export declare class DeleteStreamingImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteStreamingImageResponse?: shared.DeleteStreamingImageResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
