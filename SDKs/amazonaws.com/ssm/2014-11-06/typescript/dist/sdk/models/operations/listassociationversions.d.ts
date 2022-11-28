import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssociationVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssociationVersionsXAmzTargetEnum {
    AmazonSsmListAssociationVersions = "AmazonSSM.ListAssociationVersions"
}
export declare class ListAssociationVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociationVersionsXAmzTargetEnum;
}
export declare class ListAssociationVersionsRequest extends SpeakeasyBase {
    queryParams: ListAssociationVersionsQueryParams;
    headers: ListAssociationVersionsHeaders;
    request: shared.ListAssociationVersionsRequest;
}
export declare class ListAssociationVersionsResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    contentType: string;
    internalServerError?: any;
    invalidNextToken?: any;
    listAssociationVersionsResult?: shared.ListAssociationVersionsResult;
    statusCode: number;
}
