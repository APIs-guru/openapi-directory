import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationInputProcessingConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationInputProcessingConfiguration = "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration"
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
    deleteApplicationInputProcessingConfigurationResponse?: shared.DeleteApplicationInputProcessingConfigurationResponse;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
