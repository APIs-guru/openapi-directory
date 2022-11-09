import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationInputProcessingConfiguration = "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration"
}
export declare class AddApplicationInputProcessingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationInputProcessingConfigurationXAmzTargetEnum;
}
export declare class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
    headers: AddApplicationInputProcessingConfigurationHeaders;
    request: shared.AddApplicationInputProcessingConfigurationRequest;
}
export declare class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
    addApplicationInputProcessingConfigurationResponse?: shared.AddApplicationInputProcessingConfigurationResponse;
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
