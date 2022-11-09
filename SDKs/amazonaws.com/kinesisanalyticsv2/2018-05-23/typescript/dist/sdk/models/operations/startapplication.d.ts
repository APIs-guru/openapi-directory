import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartApplicationXAmzTargetEnum {
    KinesisAnalytics20180523StartApplication = "KinesisAnalytics_20180523.StartApplication"
}
export declare class StartApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartApplicationXAmzTargetEnum;
}
export declare class StartApplicationRequest extends SpeakeasyBase {
    headers: StartApplicationHeaders;
    request: shared.StartApplicationRequest;
}
export declare class StartApplicationResponse extends SpeakeasyBase {
    contentType: string;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    startApplicationResponse?: Map<string, any>;
    statusCode: number;
}
