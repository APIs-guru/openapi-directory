import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatabasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatabasesXAmzTargetEnum {
    Timestream20181101ListDatabases = "Timestream_20181101.ListDatabases"
}
export declare class ListDatabasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatabasesXAmzTargetEnum;
}
export declare class ListDatabasesRequest extends SpeakeasyBase {
    queryParams: ListDatabasesQueryParams;
    headers: ListDatabasesHeaders;
    request: shared.ListDatabasesRequest;
}
export declare class ListDatabasesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidEndpointException?: any;
    listDatabasesResponse?: shared.ListDatabasesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
