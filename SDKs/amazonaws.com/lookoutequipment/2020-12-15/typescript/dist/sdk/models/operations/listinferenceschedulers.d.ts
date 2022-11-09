import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInferenceSchedulersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListInferenceSchedulersXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceListInferenceSchedulers = "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers"
}
export declare class ListInferenceSchedulersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInferenceSchedulersXAmzTargetEnum;
}
export declare class ListInferenceSchedulersRequest extends SpeakeasyBase {
    queryParams: ListInferenceSchedulersQueryParams;
    headers: ListInferenceSchedulersHeaders;
    request: shared.ListInferenceSchedulersRequest;
}
export declare class ListInferenceSchedulersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listInferenceSchedulersResponse?: shared.ListInferenceSchedulersResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
