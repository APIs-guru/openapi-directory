import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddEventSourceRequestBody extends SpeakeasyBase {
    batchSize?: number;
    eventSource: string;
    functionName: string;
    parameters?: Map<string, string>;
    role: string;
}
export declare class AddEventSourceRequest extends SpeakeasyBase {
    headers: AddEventSourceHeaders;
    request: AddEventSourceRequestBody;
}
export declare class AddEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    eventSourceConfiguration?: shared.EventSourceConfiguration;
    invalidParameterValueException?: shared.InvalidParameterValueException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
