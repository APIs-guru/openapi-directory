import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEndpointConfigsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEndpointConfigsXAmzTargetEnum {
    SageMakerListEndpointConfigs = "SageMaker.ListEndpointConfigs"
}
export declare class ListEndpointConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEndpointConfigsXAmzTargetEnum;
}
export declare class ListEndpointConfigsRequest extends SpeakeasyBase {
    queryParams: ListEndpointConfigsQueryParams;
    headers: ListEndpointConfigsHeaders;
    request: shared.ListEndpointConfigsInput;
}
export declare class ListEndpointConfigsResponse extends SpeakeasyBase {
    contentType: string;
    listEndpointConfigsOutput?: shared.ListEndpointConfigsOutput;
    statusCode: number;
}
