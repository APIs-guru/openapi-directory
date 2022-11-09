import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePortalHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreatePortalRequestBodyAlarms
/** 
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
export class CreatePortalRequestBodyAlarms extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmRoleArn" })
  alarmRoleArn?: string;

  @Metadata({ data: "json, name=notificationLambdaArn" })
  notificationLambdaArn?: string;
}

export enum CreatePortalRequestBodyPortalAuthModeEnum {
    Iam = "IAM"
,    Sso = "SSO"
}


// CreatePortalRequestBodyPortalLogoImageFile
/** 
 * Contains an image file.
**/
export class CreatePortalRequestBodyPortalLogoImageFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=type" })
  type?: shared.ImageFileTypeEnum;
}


export class CreatePortalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarms" })
  alarms?: CreatePortalRequestBodyAlarms;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=notificationSenderEmail" })
  notificationSenderEmail?: string;

  @Metadata({ data: "json, name=portalAuthMode" })
  portalAuthMode?: CreatePortalRequestBodyPortalAuthModeEnum;

  @Metadata({ data: "json, name=portalContactEmail" })
  portalContactEmail: string;

  @Metadata({ data: "json, name=portalDescription" })
  portalDescription?: string;

  @Metadata({ data: "json, name=portalLogoImageFile" })
  portalLogoImageFile?: CreatePortalRequestBodyPortalLogoImageFile;

  @Metadata({ data: "json, name=portalName" })
  portalName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreatePortalRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePortalHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePortalRequestBody;
}


export class CreatePortalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPortalResponse?: shared.CreatePortalResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
