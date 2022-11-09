import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateRealtimeEndpointXAmzTargetEnum {
    AmazonMl20141212CreateRealtimeEndpoint = "AmazonML_20141212.CreateRealtimeEndpoint"
}
export declare class CreateRealtimeEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRealtimeEndpointXAmzTargetEnum;
}
export declare class CreateRealtimeEndpointRequest extends SpeakeasyBase {
    headers: CreateRealtimeEndpointHeaders;
    request: shared.CreateRealtimeEndpointInput;
}
export declare class CreateRealtimeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    createRealtimeEndpointOutput?: shared.CreateRealtimeEndpointOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
