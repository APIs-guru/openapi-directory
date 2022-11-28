import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListExperimentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListExperimentsXAmzTargetEnum {
    SageMakerListExperiments = "SageMaker.ListExperiments"
}
export declare class ListExperimentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExperimentsXAmzTargetEnum;
}
export declare class ListExperimentsRequest extends SpeakeasyBase {
    queryParams: ListExperimentsQueryParams;
    headers: ListExperimentsHeaders;
    request: shared.ListExperimentsRequest;
}
export declare class ListExperimentsResponse extends SpeakeasyBase {
    contentType: string;
    listExperimentsResponse?: shared.ListExperimentsResponse;
    statusCode: number;
}
