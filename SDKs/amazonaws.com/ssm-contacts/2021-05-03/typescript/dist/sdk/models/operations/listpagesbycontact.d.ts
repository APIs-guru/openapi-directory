import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPagesByContactQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPagesByContactXAmzTargetEnum {
    SsmContactsListPagesByContact = "SSMContacts.ListPagesByContact"
}
export declare class ListPagesByContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPagesByContactXAmzTargetEnum;
}
export declare class ListPagesByContactRequest extends SpeakeasyBase {
    queryParams: ListPagesByContactQueryParams;
    headers: ListPagesByContactHeaders;
    request: shared.ListPagesByContactRequest;
}
export declare class ListPagesByContactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPagesByContactResult?: shared.ListPagesByContactResult;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
