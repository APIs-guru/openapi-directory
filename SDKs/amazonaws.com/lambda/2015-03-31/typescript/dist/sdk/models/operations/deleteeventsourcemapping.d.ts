import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEventSourceMappingPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class DeleteEventSourceMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEventSourceMappingRequest extends SpeakeasyBase {
    pathParams: DeleteEventSourceMappingPathParams;
    headers: DeleteEventSourceMappingHeaders;
}
export declare class DeleteEventSourceMappingResponse extends SpeakeasyBase {
    contentType: string;
    eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;
    invalidParameterValueException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
