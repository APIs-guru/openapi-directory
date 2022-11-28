import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHandshakesForAccountQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHandshakesForAccountXAmzTargetEnum {
    AwsOrganizationsV20161128ListHandshakesForAccount = "AWSOrganizationsV20161128.ListHandshakesForAccount"
}
export declare class ListHandshakesForAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHandshakesForAccountXAmzTargetEnum;
}
export declare class ListHandshakesForAccountRequest extends SpeakeasyBase {
    queryParams: ListHandshakesForAccountQueryParams;
    headers: ListHandshakesForAccountHeaders;
    request: shared.ListHandshakesForAccountRequest;
}
export declare class ListHandshakesForAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidInputException?: any;
    listHandshakesForAccountResponse?: shared.ListHandshakesForAccountResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
