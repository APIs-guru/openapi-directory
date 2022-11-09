import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSchemasQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSchemasXAmzTargetEnum {
    RedshiftDataListSchemas = "RedshiftData.ListSchemas"
}
export declare class ListSchemasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSchemasXAmzTargetEnum;
}
export declare class ListSchemasRequest extends SpeakeasyBase {
    queryParams: ListSchemasQueryParams;
    headers: ListSchemasHeaders;
    request: shared.ListSchemasRequest;
}
export declare class ListSchemasResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listSchemasResponse?: shared.ListSchemasResponse;
    statusCode: number;
    validationException?: any;
}
