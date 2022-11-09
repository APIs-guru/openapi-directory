import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePortalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portalId" })
  portalId: string;
}


export class UpdatePortalHeaders extends SpeakeasyBase {
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


// UpdatePortalRequestBodyAlarms
/** 
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
export class UpdatePortalRequestBodyAlarms extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarmRoleArn" })
  alarmRoleArn?: string;

  @Metadata({ data: "json, name=notificationLambdaArn" })
  notificationLambdaArn?: string;
}


// UpdatePortalRequestBodyPortalLogoImage
/** 
 * <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
**/
export class UpdatePortalRequestBodyPortalLogoImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: shared.ImageFile;

  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class UpdatePortalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarms" })
  alarms?: UpdatePortalRequestBodyAlarms;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=notificationSenderEmail" })
  notificationSenderEmail?: string;

  @Metadata({ data: "json, name=portalContactEmail" })
  portalContactEmail: string;

  @Metadata({ data: "json, name=portalDescription" })
  portalDescription?: string;

  @Metadata({ data: "json, name=portalLogoImage" })
  portalLogoImage?: UpdatePortalRequestBodyPortalLogoImage;

  @Metadata({ data: "json, name=portalName" })
  portalName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}


export class UpdatePortalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePortalPathParams;

  @Metadata()
  headers: UpdatePortalHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePortalRequestBody;
}


export class UpdatePortalResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updatePortalResponse?: shared.UpdatePortalResponse;
}
