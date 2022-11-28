import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListComplianceItemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListComplianceItemsXAmzTargetEnum {
    AmazonSsmListComplianceItems = "AmazonSSM.ListComplianceItems"
}
export declare class ListComplianceItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListComplianceItemsXAmzTargetEnum;
}
export declare class ListComplianceItemsRequest extends SpeakeasyBase {
    queryParams: ListComplianceItemsQueryParams;
    headers: ListComplianceItemsHeaders;
    request: shared.ListComplianceItemsRequest;
}
export declare class ListComplianceItemsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidFilter?: any;
    invalidNextToken?: any;
    invalidResourceId?: any;
    invalidResourceType?: any;
    listComplianceItemsResult?: shared.ListComplianceItemsResult;
    statusCode: number;
}
