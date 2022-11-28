import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableEnhancedMonitoringXAmzTargetEnum {
    Kinesis20131202EnableEnhancedMonitoring = "Kinesis_20131202.EnableEnhancedMonitoring"
}
export declare class EnableEnhancedMonitoringHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableEnhancedMonitoringXAmzTargetEnum;
}
export declare class EnableEnhancedMonitoringRequest extends SpeakeasyBase {
    headers: EnableEnhancedMonitoringHeaders;
    request: shared.EnableEnhancedMonitoringInput;
}
export declare class EnableEnhancedMonitoringResponse extends SpeakeasyBase {
    contentType: string;
    enhancedMonitoringOutput?: shared.EnhancedMonitoringOutput;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
