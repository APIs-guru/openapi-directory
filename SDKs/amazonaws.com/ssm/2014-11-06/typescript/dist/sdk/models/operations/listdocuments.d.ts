import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDocumentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDocumentsXAmzTargetEnum {
    AmazonSsmListDocuments = "AmazonSSM.ListDocuments"
}
export declare class ListDocumentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDocumentsXAmzTargetEnum;
}
export declare class ListDocumentsRequest extends SpeakeasyBase {
    queryParams: ListDocumentsQueryParams;
    headers: ListDocumentsHeaders;
    request: shared.ListDocumentsRequest;
}
export declare class ListDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidNextToken?: any;
    listDocumentsResult?: shared.ListDocumentsResult;
    statusCode: number;
}
