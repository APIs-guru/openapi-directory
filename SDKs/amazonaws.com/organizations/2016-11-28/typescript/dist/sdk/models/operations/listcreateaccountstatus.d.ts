import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCreateAccountStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCreateAccountStatusXAmzTargetEnum {
    AwsOrganizationsV20161128ListCreateAccountStatus = "AWSOrganizationsV20161128.ListCreateAccountStatus"
}
export declare class ListCreateAccountStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCreateAccountStatusXAmzTargetEnum;
}
export declare class ListCreateAccountStatusRequest extends SpeakeasyBase {
    queryParams: ListCreateAccountStatusQueryParams;
    headers: ListCreateAccountStatusHeaders;
    request: shared.ListCreateAccountStatusRequest;
}
export declare class ListCreateAccountStatusResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listCreateAccountStatusResponse?: shared.ListCreateAccountStatusResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
