import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStudioLifecycleConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListStudioLifecycleConfigsXAmzTargetEnum {
    SageMakerListStudioLifecycleConfigs = "SageMaker.ListStudioLifecycleConfigs"
}
export declare class ListStudioLifecycleConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStudioLifecycleConfigsXAmzTargetEnum;
}
export declare class ListStudioLifecycleConfigsRequest extends SpeakeasyBase {
    queryParams: ListStudioLifecycleConfigsQueryParams;
    headers: ListStudioLifecycleConfigsHeaders;
    request: shared.ListStudioLifecycleConfigsRequest;
}
export declare class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
    contentType: string;
    listStudioLifecycleConfigsResponse?: shared.ListStudioLifecycleConfigsResponse;
    resourceInUse?: any;
    statusCode: number;
}
