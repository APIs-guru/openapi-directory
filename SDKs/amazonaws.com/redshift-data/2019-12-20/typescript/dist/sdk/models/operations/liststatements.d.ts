import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListStatementsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListStatementsXAmzTargetEnum {
    RedshiftDataListStatements = "RedshiftData.ListStatements"
}
export declare class ListStatementsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStatementsXAmzTargetEnum;
}
export declare class ListStatementsRequest extends SpeakeasyBase {
    queryParams: ListStatementsQueryParams;
    headers: ListStatementsHeaders;
    request: shared.ListStatementsRequest;
}
export declare class ListStatementsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listStatementsResponse?: shared.ListStatementsResponse;
    statusCode: number;
    validationException?: any;
}
