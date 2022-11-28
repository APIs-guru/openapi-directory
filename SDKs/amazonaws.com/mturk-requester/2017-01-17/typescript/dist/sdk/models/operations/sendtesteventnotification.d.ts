import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SendTestEventNotificationXAmzTargetEnum {
    MTurkRequesterServiceV20170117SendTestEventNotification = "MTurkRequesterServiceV20170117.SendTestEventNotification"
}
export declare class SendTestEventNotificationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendTestEventNotificationXAmzTargetEnum;
}
export declare class SendTestEventNotificationRequest extends SpeakeasyBase {
    headers: SendTestEventNotificationHeaders;
    request: shared.SendTestEventNotificationRequest;
}
export declare class SendTestEventNotificationResponse extends SpeakeasyBase {
    contentType: string;
    requestError?: any;
    sendTestEventNotificationResponse?: Map<string, any>;
    serviceFault?: any;
    statusCode: number;
}
