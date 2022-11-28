import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetServiceSettingXAmzTargetEnum {
    AmazonSsmGetServiceSetting = "AmazonSSM.GetServiceSetting"
}
export declare class GetServiceSettingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceSettingXAmzTargetEnum;
}
export declare class GetServiceSettingRequest extends SpeakeasyBase {
    headers: GetServiceSettingHeaders;
    request: shared.GetServiceSettingRequest;
}
export declare class GetServiceSettingResponse extends SpeakeasyBase {
    contentType: string;
    getServiceSettingResult?: shared.GetServiceSettingResult;
    internalServerError?: any;
    serviceSettingNotFound?: any;
    statusCode: number;
}
