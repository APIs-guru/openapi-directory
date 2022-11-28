import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePortalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portalId" })
  portalId: string;
}


export class UpdatePortalHeaders extends SpeakeasyBase {
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


// UpdatePortalRequestBodyAlarms
/** 
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
export class UpdatePortalRequestBodyAlarms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarmRoleArn" })
  alarmRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationLambdaArn" })
  notificationLambdaArn?: string;
}


// UpdatePortalRequestBodyPortalLogoImage
/** 
 * <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
**/
export class UpdatePortalRequestBodyPortalLogoImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: shared.ImageFile;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class UpdatePortalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarms" })
  alarms?: UpdatePortalRequestBodyAlarms;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationSenderEmail" })
  notificationSenderEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=portalContactEmail" })
  portalContactEmail: string;

  @SpeakeasyMetadata({ data: "json, name=portalDescription" })
  portalDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=portalLogoImage" })
  portalLogoImage?: UpdatePortalRequestBodyPortalLogoImage;

  @SpeakeasyMetadata({ data: "json, name=portalName" })
  portalName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}


export class UpdatePortalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePortalPathParams;

  @SpeakeasyMetadata()
  headers: UpdatePortalHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatePortalRequestBody;
}


export class UpdatePortalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updatePortalResponse?: shared.UpdatePortalResponse;
}
