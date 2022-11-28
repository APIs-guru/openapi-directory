import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePortalPathParams extends SpeakeasyBase {
    portalId: string;
}
export declare class UpdatePortalHeaders extends SpeakeasyBase {
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
export declare class UpdatePortalRequestBodyAlarms extends SpeakeasyBase {
    alarmRoleArn?: string;
    notificationLambdaArn?: string;
}
/**
 * <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
**/
export declare class UpdatePortalRequestBodyPortalLogoImage extends SpeakeasyBase {
    file?: shared.ImageFile;
    id?: string;
}
export declare class UpdatePortalRequestBody extends SpeakeasyBase {
    alarms?: UpdatePortalRequestBodyAlarms;
    clientToken?: string;
    notificationSenderEmail?: string;
    portalContactEmail: string;
    portalDescription?: string;
    portalLogoImage?: UpdatePortalRequestBodyPortalLogoImage;
    portalName: string;
    roleArn: string;
}
export declare class UpdatePortalRequest extends SpeakeasyBase {
    pathParams: UpdatePortalPathParams;
    headers: UpdatePortalHeaders;
    request: UpdatePortalRequestBody;
}
export declare class UpdatePortalResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updatePortalResponse?: shared.UpdatePortalResponse;
}
