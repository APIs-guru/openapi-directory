import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConnectorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetConnectorsXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetConnectors = "AWSServerMigrationService_V2016_10_24.GetConnectors"
}
export declare class GetConnectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetConnectorsXAmzTargetEnum;
}
export declare class GetConnectorsRequest extends SpeakeasyBase {
    queryParams: GetConnectorsQueryParams;
    headers: GetConnectorsHeaders;
    request: shared.GetConnectorsRequest;
}
export declare class GetConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    getConnectorsResponse?: shared.GetConnectorsResponse;
    statusCode: number;
    unauthorizedOperationException?: any;
}
