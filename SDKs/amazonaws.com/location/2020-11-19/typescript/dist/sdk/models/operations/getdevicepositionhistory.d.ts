import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicePositionHistoryPathParams extends SpeakeasyBase {
    deviceId: string;
    trackerName: string;
}
export declare class GetDevicePositionHistoryQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetDevicePositionHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDevicePositionHistoryRequestBody extends SpeakeasyBase {
    endTimeExclusive?: Date;
    nextToken?: string;
    startTimeInclusive?: Date;
}
export declare class GetDevicePositionHistoryRequest extends SpeakeasyBase {
    pathParams: GetDevicePositionHistoryPathParams;
    queryParams: GetDevicePositionHistoryQueryParams;
    headers: GetDevicePositionHistoryHeaders;
    request: GetDevicePositionHistoryRequestBody;
}
export declare class GetDevicePositionHistoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getDevicePositionHistoryResponse?: shared.GetDevicePositionHistoryResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
