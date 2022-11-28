import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStreamingImagePathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class CreateStreamingImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingImageRequestBody extends SpeakeasyBase {
    description?: string;
    ec2ImageId: string;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateStreamingImageRequest extends SpeakeasyBase {
    pathParams: CreateStreamingImagePathParams;
    headers: CreateStreamingImageHeaders;
    request: CreateStreamingImageRequestBody;
}
export declare class CreateStreamingImageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createStreamingImageResponse?: shared.CreateStreamingImageResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
