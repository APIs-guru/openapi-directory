import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDatabasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatabasesXAmzTargetEnum {
    RedshiftDataListDatabases = "RedshiftData.ListDatabases"
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
    contentType: string;
    internalServerException?: any;
    listDatabasesResponse?: shared.ListDatabasesResponse;
    statusCode: number;
    validationException?: any;
}
