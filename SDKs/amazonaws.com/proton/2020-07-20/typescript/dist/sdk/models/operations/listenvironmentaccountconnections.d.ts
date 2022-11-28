import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEnvironmentAccountConnectionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEnvironmentAccountConnectionsXAmzTargetEnum {
    AwsProton20200720ListEnvironmentAccountConnections = "AwsProton20200720.ListEnvironmentAccountConnections"
}
export declare class ListEnvironmentAccountConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentAccountConnectionsXAmzTargetEnum;
}
export declare class ListEnvironmentAccountConnectionsRequest extends SpeakeasyBase {
    queryParams: ListEnvironmentAccountConnectionsQueryParams;
    headers: ListEnvironmentAccountConnectionsHeaders;
    request: shared.ListEnvironmentAccountConnectionsInput;
}
export declare class ListEnvironmentAccountConnectionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEnvironmentAccountConnectionsOutput?: shared.ListEnvironmentAccountConnectionsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
