import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCelebrityInfoXAmzTargetEnum {
    RekognitionServiceGetCelebrityInfo = "RekognitionService.GetCelebrityInfo"
}
export declare class GetCelebrityInfoHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCelebrityInfoXAmzTargetEnum;
}
export declare class GetCelebrityInfoRequest extends SpeakeasyBase {
    headers: GetCelebrityInfoHeaders;
    request: shared.GetCelebrityInfoRequest;
}
export declare class GetCelebrityInfoResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getCelebrityInfoResponse?: shared.GetCelebrityInfoResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
