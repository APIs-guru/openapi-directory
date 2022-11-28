import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRecommenderConfigurationPathParams extends SpeakeasyBase {
    recommenderId: string;
}
export declare class DeleteRecommenderConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRecommenderConfigurationRequest extends SpeakeasyBase {
    pathParams: DeleteRecommenderConfigurationPathParams;
    headers: DeleteRecommenderConfigurationHeaders;
}
export declare class DeleteRecommenderConfigurationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteRecommenderConfigurationResponse?: shared.DeleteRecommenderConfigurationResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
