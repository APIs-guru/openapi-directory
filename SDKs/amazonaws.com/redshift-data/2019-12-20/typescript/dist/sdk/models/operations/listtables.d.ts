import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTablesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTablesXAmzTargetEnum {
    RedshiftDataListTables = "RedshiftData.ListTables"
}
export declare class ListTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTablesXAmzTargetEnum;
}
export declare class ListTablesRequest extends SpeakeasyBase {
    queryParams: ListTablesQueryParams;
    headers: ListTablesHeaders;
    request: shared.ListTablesRequest;
}
export declare class ListTablesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listTablesResponse?: shared.ListTablesResponse;
    statusCode: number;
    validationException?: any;
}
