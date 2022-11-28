import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventSourceMappingPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class GetEventSourceMappingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEventSourceMappingRequest extends SpeakeasyBase {
    pathParams: GetEventSourceMappingPathParams;
    headers: GetEventSourceMappingHeaders;
}
export declare class GetEventSourceMappingResponse extends SpeakeasyBase {
    contentType: string;
    eventSourceMappingConfiguration?: shared.EventSourceMappingConfiguration;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
