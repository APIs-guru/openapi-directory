import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChildrenQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListChildrenXAmzTargetEnum {
    AwsOrganizationsV20161128ListChildren = "AWSOrganizationsV20161128.ListChildren"
}
export declare class ListChildrenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListChildrenXAmzTargetEnum;
}
export declare class ListChildrenRequest extends SpeakeasyBase {
    queryParams: ListChildrenQueryParams;
    headers: ListChildrenHeaders;
    request: shared.ListChildrenRequest;
}
export declare class ListChildrenResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listChildrenResponse?: shared.ListChildrenResponse;
    parentNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
