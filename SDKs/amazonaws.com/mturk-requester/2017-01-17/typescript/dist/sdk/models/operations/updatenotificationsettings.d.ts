import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateNotificationSettingsXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateNotificationSettings = "MTurkRequesterServiceV20170117.UpdateNotificationSettings"
}
export declare class UpdateNotificationSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotificationSettingsXAmzTargetEnum;
}
export declare class UpdateNotificationSettingsRequest extends SpeakeasyBase {
    headers: UpdateNotificationSettingsHeaders;
    request: shared.UpdateNotificationSettingsRequest;
}
export declare class UpdateNotificationSettingsResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
    updateNotificationSettingsResponse?: Map<string, any>;
}
