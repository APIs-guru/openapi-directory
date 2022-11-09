import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveEventSourcePathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class RemoveEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveEventSourceRequest extends SpeakeasyBase {
    pathParams: RemoveEventSourcePathParams;
    headers: RemoveEventSourceHeaders;
}
export declare class RemoveEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: shared.InvalidParameterValueException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
