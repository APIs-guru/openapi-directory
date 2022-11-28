import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateApplicationXAmzTargetEnum {
    KinesisAnalytics20180523UpdateApplication = "KinesisAnalytics_20180523.UpdateApplication"
}
export declare class UpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationXAmzTargetEnum;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    headers: UpdateApplicationHeaders;
    request: shared.UpdateApplicationRequest;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    codeValidationException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateApplicationResponse?: shared.UpdateApplicationResponse;
}
