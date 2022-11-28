import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResetServiceSettingXAmzTargetEnum {
    AmazonSsmResetServiceSetting = "AmazonSSM.ResetServiceSetting"
}
export declare class ResetServiceSettingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetServiceSettingXAmzTargetEnum;
}
export declare class ResetServiceSettingRequest extends SpeakeasyBase {
    headers: ResetServiceSettingHeaders;
    request: shared.ResetServiceSettingRequest;
}
export declare class ResetServiceSettingResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    resetServiceSettingResult?: shared.ResetServiceSettingResult;
    serviceSettingNotFound?: any;
    statusCode: number;
    tooManyUpdates?: any;
}
