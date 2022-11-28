import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecommenderConfigurationPathParams extends SpeakeasyBase {
    recommenderId: string;
}
export declare class GetRecommenderConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecommenderConfigurationRequest extends SpeakeasyBase {
    pathParams: GetRecommenderConfigurationPathParams;
    headers: GetRecommenderConfigurationHeaders;
}
export declare class GetRecommenderConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getRecommenderConfigurationResponse?: shared.GetRecommenderConfigurationResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
