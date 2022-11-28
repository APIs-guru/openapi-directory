import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateServiceSettingXAmzTargetEnum {
    AmazonSsmUpdateServiceSetting = "AmazonSSM.UpdateServiceSetting"
}
export declare class UpdateServiceSettingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceSettingXAmzTargetEnum;
}
export declare class UpdateServiceSettingRequest extends SpeakeasyBase {
    headers: UpdateServiceSettingHeaders;
    request: shared.UpdateServiceSettingRequest;
}
export declare class UpdateServiceSettingResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    serviceSettingNotFound?: any;
    statusCode: number;
    tooManyUpdates?: any;
    updateServiceSettingResult?: Map<string, any>;
}
