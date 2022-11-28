import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration"
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
    addApplicationInputProcessingConfigurationResponse?: Map<string, any>;
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
