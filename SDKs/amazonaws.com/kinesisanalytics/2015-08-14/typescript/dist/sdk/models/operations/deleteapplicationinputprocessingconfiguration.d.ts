import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationInputProcessingConfiguration = "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration"
}
export declare class DeleteApplicationInputProcessingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationInputProcessingConfigurationXAmzTargetEnum;
}
export declare class DeleteApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
    headers: DeleteApplicationInputProcessingConfigurationHeaders;
    request: shared.DeleteApplicationInputProcessingConfigurationRequest;
}
export declare class DeleteApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApplicationInputProcessingConfigurationResponse?: Map<string, any>;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
