import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableEnhancedMonitoringXAmzTargetEnum {
    Kinesis20131202DisableEnhancedMonitoring = "Kinesis_20131202.DisableEnhancedMonitoring"
}
export declare class DisableEnhancedMonitoringHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableEnhancedMonitoringXAmzTargetEnum;
}
export declare class DisableEnhancedMonitoringRequest extends SpeakeasyBase {
    headers: DisableEnhancedMonitoringHeaders;
    request: shared.DisableEnhancedMonitoringInput;
}
export declare class DisableEnhancedMonitoringResponse extends SpeakeasyBase {
    contentType: string;
    enhancedMonitoringOutput?: shared.EnhancedMonitoringOutput;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
