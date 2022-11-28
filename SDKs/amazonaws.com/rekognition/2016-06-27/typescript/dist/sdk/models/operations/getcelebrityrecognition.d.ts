import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCelebrityRecognitionQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetCelebrityRecognitionXAmzTargetEnum {
    RekognitionServiceGetCelebrityRecognition = "RekognitionService.GetCelebrityRecognition"
}
export declare class GetCelebrityRecognitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCelebrityRecognitionXAmzTargetEnum;
}
export declare class GetCelebrityRecognitionRequest extends SpeakeasyBase {
    queryParams: GetCelebrityRecognitionQueryParams;
    headers: GetCelebrityRecognitionHeaders;
    request: shared.GetCelebrityRecognitionRequest;
}
export declare class GetCelebrityRecognitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getCelebrityRecognitionResponse?: shared.GetCelebrityRecognitionResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
