import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePortalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
export declare class CreatePortalRequestBodyAlarms extends SpeakeasyBase {
    alarmRoleArn?: string;
    notificationLambdaArn?: string;
}
export declare enum CreatePortalRequestBodyPortalAuthModeEnum {
    Iam = "IAM",
    Sso = "SSO"
}
/**
 * Contains an image file.
**/
export declare class CreatePortalRequestBodyPortalLogoImageFile extends SpeakeasyBase {
    data?: string;
    type?: shared.ImageFileTypeEnum;
}
export declare class CreatePortalRequestBody extends SpeakeasyBase {
    alarms?: CreatePortalRequestBodyAlarms;
    clientToken?: string;
    notificationSenderEmail?: string;
    portalAuthMode?: CreatePortalRequestBodyPortalAuthModeEnum;
    portalContactEmail: string;
    portalDescription?: string;
    portalLogoImageFile?: CreatePortalRequestBodyPortalLogoImageFile;
    portalName: string;
    roleArn: string;
    tags?: Map<string, string>;
}
export declare class CreatePortalRequest extends SpeakeasyBase {
    headers: CreatePortalHeaders;
    request: CreatePortalRequestBody;
}
export declare class CreatePortalResponse extends SpeakeasyBase {
    contentType: string;
    createPortalResponse?: shared.CreatePortalResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
