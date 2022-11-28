import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInstancesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListInstancesXAmzTargetEnum {
    SwbExternalServiceListInstances = "SWBExternalService.ListInstances"
}
export declare class ListInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstancesXAmzTargetEnum;
}
export declare class ListInstancesRequest extends SpeakeasyBase {
    queryParams: ListInstancesQueryParams;
    headers: ListInstancesHeaders;
    request: shared.ListInstancesRequest;
}
export declare class ListInstancesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
