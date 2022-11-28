import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDocumentVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDocumentVersionsXAmzTargetEnum {
    AmazonSsmListDocumentVersions = "AmazonSSM.ListDocumentVersions"
}
export declare class ListDocumentVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentVersionsXAmzTargetEnum;
}
export declare class ListDocumentVersionsRequest extends SpeakeasyBase {
    queryParams: ListDocumentVersionsQueryParams;
    headers: ListDocumentVersionsHeaders;
    request: shared.ListDocumentVersionsRequest;
}
export declare class ListDocumentVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidDocument?: any;
    invalidNextToken?: any;
    listDocumentVersionsResult?: shared.ListDocumentVersionsResult;
    statusCode: number;
}
