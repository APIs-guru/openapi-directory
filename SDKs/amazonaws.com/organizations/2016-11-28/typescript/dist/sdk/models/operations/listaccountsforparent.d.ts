import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccountsForParentQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountsForParentXAmzTargetEnum {
    AwsOrganizationsV20161128ListAccountsForParent = "AWSOrganizationsV20161128.ListAccountsForParent"
}
export declare class ListAccountsForParentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountsForParentXAmzTargetEnum;
}
export declare class ListAccountsForParentRequest extends SpeakeasyBase {
    queryParams: ListAccountsForParentQueryParams;
    headers: ListAccountsForParentHeaders;
    request: shared.ListAccountsForParentRequest;
}
export declare class ListAccountsForParentResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listAccountsForParentResponse?: shared.ListAccountsForParentResponse;
    parentNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
