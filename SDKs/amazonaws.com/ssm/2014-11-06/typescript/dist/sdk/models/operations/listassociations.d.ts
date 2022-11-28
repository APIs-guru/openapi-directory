import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAssociationsXAmzTargetEnum {
    AmazonSsmListAssociations = "AmazonSSM.ListAssociations"
}
export declare class ListAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociationsXAmzTargetEnum;
}
export declare class ListAssociationsRequest extends SpeakeasyBase {
    queryParams: ListAssociationsQueryParams;
    headers: ListAssociationsHeaders;
    request: shared.ListAssociationsRequest;
}
export declare class ListAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidNextToken?: any;
    listAssociationsResult?: shared.ListAssociationsResult;
    statusCode: number;
}
