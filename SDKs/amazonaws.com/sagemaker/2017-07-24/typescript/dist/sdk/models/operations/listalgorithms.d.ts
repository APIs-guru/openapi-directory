import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAlgorithmsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAlgorithmsXAmzTargetEnum {
    SageMakerListAlgorithms = "SageMaker.ListAlgorithms"
}
export declare class ListAlgorithmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAlgorithmsXAmzTargetEnum;
}
export declare class ListAlgorithmsRequest extends SpeakeasyBase {
    queryParams: ListAlgorithmsQueryParams;
    headers: ListAlgorithmsHeaders;
    request: shared.ListAlgorithmsInput;
}
export declare class ListAlgorithmsResponse extends SpeakeasyBase {
    contentType: string;
    listAlgorithmsOutput?: shared.ListAlgorithmsOutput;
    statusCode: number;
}
