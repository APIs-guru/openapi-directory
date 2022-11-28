import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPageReceiptsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPageReceiptsXAmzTargetEnum {
    SsmContactsListPageReceipts = "SSMContacts.ListPageReceipts"
}
export declare class ListPageReceiptsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPageReceiptsXAmzTargetEnum;
}
export declare class ListPageReceiptsRequest extends SpeakeasyBase {
    queryParams: ListPageReceiptsQueryParams;
    headers: ListPageReceiptsHeaders;
    request: shared.ListPageReceiptsRequest;
}
export declare class ListPageReceiptsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPageReceiptsResult?: shared.ListPageReceiptsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
