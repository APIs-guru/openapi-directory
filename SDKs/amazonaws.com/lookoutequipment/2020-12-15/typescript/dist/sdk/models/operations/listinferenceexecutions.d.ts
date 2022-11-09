import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInferenceExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListInferenceExecutionsXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceListInferenceExecutions = "AWSLookoutEquipmentFrontendService.ListInferenceExecutions"
}
export declare class ListInferenceExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInferenceExecutionsXAmzTargetEnum;
}
export declare class ListInferenceExecutionsRequest extends SpeakeasyBase {
    queryParams: ListInferenceExecutionsQueryParams;
    headers: ListInferenceExecutionsHeaders;
    request: shared.ListInferenceExecutionsRequest;
}
export declare class ListInferenceExecutionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listInferenceExecutionsResponse?: shared.ListInferenceExecutionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
