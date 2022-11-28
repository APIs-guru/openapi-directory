import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOpsItemRelatedItemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOpsItemRelatedItemsXAmzTargetEnum {
    AmazonSsmListOpsItemRelatedItems = "AmazonSSM.ListOpsItemRelatedItems"
}
export declare class ListOpsItemRelatedItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOpsItemRelatedItemsXAmzTargetEnum;
}
export declare class ListOpsItemRelatedItemsRequest extends SpeakeasyBase {
    queryParams: ListOpsItemRelatedItemsQueryParams;
    headers: ListOpsItemRelatedItemsHeaders;
    request: shared.ListOpsItemRelatedItemsRequest;
}
export declare class ListOpsItemRelatedItemsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listOpsItemRelatedItemsResponse?: shared.ListOpsItemRelatedItemsResponse;
    opsItemInvalidParameterException?: any;
    statusCode: number;
}
