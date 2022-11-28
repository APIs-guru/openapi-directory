import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEndpointsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEndpointsXAmzTargetEnum {
    SageMakerListEndpoints = "SageMaker.ListEndpoints"
}
export declare class ListEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEndpointsXAmzTargetEnum;
}
export declare class ListEndpointsRequest extends SpeakeasyBase {
    queryParams: ListEndpointsQueryParams;
    headers: ListEndpointsHeaders;
    request: shared.ListEndpointsInput;
}
export declare class ListEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    listEndpointsOutput?: shared.ListEndpointsOutput;
    statusCode: number;
}
