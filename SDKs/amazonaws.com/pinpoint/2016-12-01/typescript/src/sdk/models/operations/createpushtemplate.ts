import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePushTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreatePushTemplateHeaders extends SpeakeasyBase {
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


// CreatePushTemplateRequestBodyPushNotificationTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
export class CreatePushTemplateRequestBodyPushNotificationTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADM" })
  adm?: shared.AndroidPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=APNS" })
  apns?: shared.ApnsPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=Baidu" })
  baidu?: shared.AndroidPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=Default" })
  default?: shared.DefaultPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=GCM" })
  gcm?: shared.AndroidPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreatePushTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PushNotificationTemplateRequest" })
  pushNotificationTemplateRequest: CreatePushTemplateRequestBodyPushNotificationTemplateRequest;
}


export class CreatePushTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePushTemplatePathParams;

  @SpeakeasyMetadata()
  headers: CreatePushTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePushTemplateRequestBody;
}


export class CreatePushTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPushTemplateResponse?: shared.CreatePushTemplateResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
