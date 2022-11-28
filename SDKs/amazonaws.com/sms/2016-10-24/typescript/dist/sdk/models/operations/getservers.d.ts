import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetServersXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetServers = "AWSServerMigrationService_V2016_10_24.GetServers"
}
export declare class GetServersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServersXAmzTargetEnum;
}
export declare class GetServersRequest extends SpeakeasyBase {
    queryParams: GetServersQueryParams;
    headers: GetServersHeaders;
    request: shared.GetServersRequest;
}
export declare class GetServersResponse extends SpeakeasyBase {
    contentType: string;
    getServersResponse?: shared.GetServersResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
