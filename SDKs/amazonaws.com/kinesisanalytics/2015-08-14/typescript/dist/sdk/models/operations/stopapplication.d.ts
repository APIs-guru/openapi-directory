import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopApplicationXAmzTargetEnum {
    KinesisAnalytics20150814StopApplication = "KinesisAnalytics_20150814.StopApplication"
}
export declare class StopApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopApplicationXAmzTargetEnum;
}
export declare class StopApplicationRequest extends SpeakeasyBase {
    headers: StopApplicationHeaders;
    request: shared.StopApplicationRequest;
}
export declare class StopApplicationResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopApplicationResponse?: Map<string, any>;
    unsupportedOperationException?: any;
}
