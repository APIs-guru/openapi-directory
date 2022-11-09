import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEventSourcePathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class GetEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEventSourceRequest extends SpeakeasyBase {
    pathParams: GetEventSourcePathParams;
    headers: GetEventSourceHeaders;
}
export declare class GetEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    eventSourceConfiguration?: shared.EventSourceConfiguration;
    invalidParameterValueException?: shared.InvalidParameterValueException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
