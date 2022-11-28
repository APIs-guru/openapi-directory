import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRootsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRootsXAmzTargetEnum {
    AwsOrganizationsV20161128ListRoots = "AWSOrganizationsV20161128.ListRoots"
}
export declare class ListRootsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRootsXAmzTargetEnum;
}
export declare class ListRootsRequest extends SpeakeasyBase {
    queryParams: ListRootsQueryParams;
    headers: ListRootsHeaders;
    request: shared.ListRootsRequest;
}
export declare class ListRootsResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listRootsResponse?: shared.ListRootsResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
