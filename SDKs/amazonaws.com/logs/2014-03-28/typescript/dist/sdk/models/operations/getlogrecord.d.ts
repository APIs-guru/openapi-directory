import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetLogRecordXAmzTargetEnum {
    Logs20140328GetLogRecord = "Logs_20140328.GetLogRecord"
}
export declare class GetLogRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLogRecordXAmzTargetEnum;
}
export declare class GetLogRecordRequest extends SpeakeasyBase {
    headers: GetLogRecordHeaders;
    request: shared.GetLogRecordRequest;
}
export declare class GetLogRecordResponse extends SpeakeasyBase {
    contentType: string;
    getLogRecordResponse?: shared.GetLogRecordResponse;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
