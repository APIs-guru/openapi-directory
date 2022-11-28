import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTrialComponentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTrialComponentsXAmzTargetEnum {
    SageMakerListTrialComponents = "SageMaker.ListTrialComponents"
}
export declare class ListTrialComponentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTrialComponentsXAmzTargetEnum;
}
export declare class ListTrialComponentsRequest extends SpeakeasyBase {
    queryParams: ListTrialComponentsQueryParams;
    headers: ListTrialComponentsHeaders;
    request: shared.ListTrialComponentsRequest;
}
export declare class ListTrialComponentsResponse extends SpeakeasyBase {
    contentType: string;
    listTrialComponentsResponse?: shared.ListTrialComponentsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
