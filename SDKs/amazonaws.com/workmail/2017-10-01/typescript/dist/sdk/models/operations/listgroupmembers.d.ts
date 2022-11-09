import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGroupMembersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListGroupMembersXAmzTargetEnum {
    WorkMailServiceListGroupMembers = "WorkMailService.ListGroupMembers"
}
export declare class ListGroupMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGroupMembersXAmzTargetEnum;
}
export declare class ListGroupMembersRequest extends SpeakeasyBase {
    queryParams: ListGroupMembersQueryParams;
    headers: ListGroupMembersHeaders;
    request: shared.ListGroupMembersRequest;
}
export declare class ListGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    listGroupMembersResponse?: shared.ListGroupMembersResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
