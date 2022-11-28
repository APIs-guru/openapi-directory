import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecommenderConfigurationsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetRecommenderConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecommenderConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetRecommenderConfigurationsQueryParams;
    headers: GetRecommenderConfigurationsHeaders;
}
export declare class GetRecommenderConfigurationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getRecommenderConfigurationsResponse?: shared.GetRecommenderConfigurationsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
