import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopApplicationXAmzTargetEnum {
    KinesisAnalytics20180523StopApplication = "KinesisAnalytics_20180523.StopApplication"
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
    concurrentModificationException?: any;
    contentType: string;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopApplicationResponse?: Map<string, any>;
}
