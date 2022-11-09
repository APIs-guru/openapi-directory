import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListModelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelsXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceListModels = "AWSLookoutEquipmentFrontendService.ListModels"
}
export declare class ListModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelsXAmzTargetEnum;
}
export declare class ListModelsRequest extends SpeakeasyBase {
    queryParams: ListModelsQueryParams;
    headers: ListModelsHeaders;
    request: shared.ListModelsRequest;
}
export declare class ListModelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listModelsResponse?: shared.ListModelsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
