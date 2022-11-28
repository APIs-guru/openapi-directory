import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonTrackingQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetPersonTrackingXAmzTargetEnum {
    RekognitionServiceGetPersonTracking = "RekognitionService.GetPersonTracking"
}
export declare class GetPersonTrackingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPersonTrackingXAmzTargetEnum;
}
export declare class GetPersonTrackingRequest extends SpeakeasyBase {
    queryParams: GetPersonTrackingQueryParams;
    headers: GetPersonTrackingHeaders;
    request: shared.GetPersonTrackingRequest;
}
export declare class GetPersonTrackingResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getPersonTrackingResponse?: shared.GetPersonTrackingResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
