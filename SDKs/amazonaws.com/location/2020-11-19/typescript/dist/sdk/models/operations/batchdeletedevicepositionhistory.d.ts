import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchDeleteDevicePositionHistoryPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class BatchDeleteDevicePositionHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteDevicePositionHistoryRequestBody extends SpeakeasyBase {
    deviceIds: string[];
}
export declare class BatchDeleteDevicePositionHistoryRequest extends SpeakeasyBase {
    pathParams: BatchDeleteDevicePositionHistoryPathParams;
    headers: BatchDeleteDevicePositionHistoryHeaders;
    request: BatchDeleteDevicePositionHistoryRequestBody;
}
export declare class BatchDeleteDevicePositionHistoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchDeleteDevicePositionHistoryResponse?: shared.BatchDeleteDevicePositionHistoryResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
