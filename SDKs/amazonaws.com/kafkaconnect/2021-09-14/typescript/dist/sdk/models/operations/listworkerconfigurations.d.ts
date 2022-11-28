import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkerConfigurationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWorkerConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorkerConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListWorkerConfigurationsQueryParams;
    headers: ListWorkerConfigurationsHeaders;
}
export declare class ListWorkerConfigurationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listWorkerConfigurationsResponse?: shared.ListWorkerConfigurationsResponse;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
