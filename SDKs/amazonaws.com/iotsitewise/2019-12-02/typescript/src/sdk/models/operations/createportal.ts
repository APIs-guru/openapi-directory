import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePortalHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreatePortalRequestBodyAlarms
/** 
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
export class CreatePortalRequestBodyAlarms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmRoleArn" })
  alarmRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationLambdaArn" })
  notificationLambdaArn?: string;
}

export enum CreatePortalRequestBodyPortalAuthModeEnum {
    Iam = "IAM",
    Sso = "SSO"
}


// CreatePortalRequestBodyPortalLogoImageFile
/** 
 * Contains an image file.
**/
export class CreatePortalRequestBodyPortalLogoImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.ImageFileTypeEnum;
}


export class CreatePortalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarms" })
  alarms?: CreatePortalRequestBodyAlarms;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationSenderEmail" })
  notificationSenderEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=portalAuthMode" })
  portalAuthMode?: CreatePortalRequestBodyPortalAuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=portalContactEmail" })
  portalContactEmail: string;

  @SpeakeasyMetadata({ data: "json, name=portalDescription" })
  portalDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=portalLogoImageFile" })
  portalLogoImageFile?: CreatePortalRequestBodyPortalLogoImageFile;

  @SpeakeasyMetadata({ data: "json, name=portalName" })
  portalName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreatePortalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePortalHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePortalRequestBody;
}


export class CreatePortalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPortalResponse?: shared.CreatePortalResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
