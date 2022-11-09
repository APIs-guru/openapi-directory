import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateApplicationXAmzTargetEnum {
    KinesisAnalytics20150814UpdateApplication = "KinesisAnalytics_20150814.UpdateApplication"
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
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    updateApplicationResponse?: Map<string, any>;
}
