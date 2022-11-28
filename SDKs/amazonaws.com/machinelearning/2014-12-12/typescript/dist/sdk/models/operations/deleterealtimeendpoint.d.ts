import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRealtimeEndpointXAmzTargetEnum {
    AmazonMl20141212DeleteRealtimeEndpoint = "AmazonML_20141212.DeleteRealtimeEndpoint"
}
export declare class DeleteRealtimeEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRealtimeEndpointXAmzTargetEnum;
}
export declare class DeleteRealtimeEndpointRequest extends SpeakeasyBase {
    headers: DeleteRealtimeEndpointHeaders;
    request: shared.DeleteRealtimeEndpointInput;
}
export declare class DeleteRealtimeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    deleteRealtimeEndpointOutput?: shared.DeleteRealtimeEndpointOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
