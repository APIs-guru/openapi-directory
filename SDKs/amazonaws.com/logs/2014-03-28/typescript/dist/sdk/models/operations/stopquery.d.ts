import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopQueryXAmzTargetEnum {
    Logs20140328StopQuery = "Logs_20140328.StopQuery"
}
export declare class StopQueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopQueryXAmzTargetEnum;
}
export declare class StopQueryRequest extends SpeakeasyBase {
    headers: StopQueryHeaders;
    request: shared.StopQueryRequest;
}
export declare class StopQueryResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    stopQueryResponse?: shared.StopQueryResponse;
}
