import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddApplicationVpcConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationVpcConfiguration = "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"
}
export declare class AddApplicationVpcConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationVpcConfigurationXAmzTargetEnum;
}
export declare class AddApplicationVpcConfigurationRequest extends SpeakeasyBase {
    headers: AddApplicationVpcConfigurationHeaders;
    request: shared.AddApplicationVpcConfigurationRequest;
}
export declare class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
    addApplicationVpcConfigurationResponse?: shared.AddApplicationVpcConfigurationResponse;
    concurrentModificationException?: any;
    contentType: string;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
