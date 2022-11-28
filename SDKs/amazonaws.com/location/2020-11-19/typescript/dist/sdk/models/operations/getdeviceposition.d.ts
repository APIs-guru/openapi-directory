import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicePositionPathParams extends SpeakeasyBase {
    deviceId: string;
    trackerName: string;
}
export declare class GetDevicePositionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDevicePositionRequest extends SpeakeasyBase {
    pathParams: GetDevicePositionPathParams;
    headers: GetDevicePositionHeaders;
}
export declare class GetDevicePositionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDevicePositionResponse?: shared.GetDevicePositionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
