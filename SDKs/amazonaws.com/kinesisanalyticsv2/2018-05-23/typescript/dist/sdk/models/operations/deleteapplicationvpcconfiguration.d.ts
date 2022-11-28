import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationVpcConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationVpcConfiguration = "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"
}
export declare class DeleteApplicationVpcConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationVpcConfigurationXAmzTargetEnum;
}
export declare class DeleteApplicationVpcConfigurationRequest extends SpeakeasyBase {
    headers: DeleteApplicationVpcConfigurationHeaders;
    request: shared.DeleteApplicationVpcConfigurationRequest;
}
export declare class DeleteApplicationVpcConfigurationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApplicationVpcConfigurationResponse?: shared.DeleteApplicationVpcConfigurationResponse;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
