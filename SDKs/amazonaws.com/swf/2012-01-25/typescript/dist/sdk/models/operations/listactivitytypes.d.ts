import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListActivityTypesQueryParams extends SpeakeasyBase {
    maximumPageSize?: string;
    nextPageToken?: string;
}
export declare enum ListActivityTypesXAmzTargetEnum {
    SimpleWorkflowServiceListActivityTypes = "SimpleWorkflowService.ListActivityTypes"
}
export declare class ListActivityTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActivityTypesXAmzTargetEnum;
}
export declare class ListActivityTypesRequest extends SpeakeasyBase {
    queryParams: ListActivityTypesQueryParams;
    headers: ListActivityTypesHeaders;
    request: shared.ListActivityTypesInput;
}
export declare class ListActivityTypesResponse extends SpeakeasyBase {
    activityTypeInfos?: shared.ActivityTypeInfos;
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
