import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListParentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListParentsXAmzTargetEnum {
    AwsOrganizationsV20161128ListParents = "AWSOrganizationsV20161128.ListParents"
}
export declare class ListParentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListParentsXAmzTargetEnum;
}
export declare class ListParentsRequest extends SpeakeasyBase {
    queryParams: ListParentsQueryParams;
    headers: ListParentsHeaders;
    request: shared.ListParentsRequest;
}
export declare class ListParentsResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    childNotFoundException?: any;
    contentType: string;
    invalidInputException?: any;
    listParentsResponse?: shared.ListParentsResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
