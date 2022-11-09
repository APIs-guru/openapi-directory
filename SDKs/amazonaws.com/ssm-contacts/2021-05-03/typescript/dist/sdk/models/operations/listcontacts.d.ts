import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListContactsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListContactsXAmzTargetEnum {
    SsmContactsListContacts = "SSMContacts.ListContacts"
}
export declare class ListContactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListContactsXAmzTargetEnum;
}
export declare class ListContactsRequest extends SpeakeasyBase {
    queryParams: ListContactsQueryParams;
    headers: ListContactsHeaders;
    request: shared.ListContactsRequest;
}
export declare class ListContactsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listContactsResult?: shared.ListContactsResult;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
