import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePushTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class UpdatePushTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=create-new-version" })
  createNewVersion?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class UpdatePushTemplateHeaders extends SpeakeasyBase {
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


// UpdatePushTemplateRequestBodyPushNotificationTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
export class UpdatePushTemplateRequestBodyPushNotificationTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADM" })
  adm?: shared.AndroidPushNotificationTemplate;

  @Metadata({ data: "json, name=APNS" })
  apns?: shared.ApnsPushNotificationTemplate;

  @Metadata({ data: "json, name=Baidu" })
  baidu?: shared.AndroidPushNotificationTemplate;

  @Metadata({ data: "json, name=Default" })
  default?: shared.DefaultPushNotificationTemplate;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=GCM" })
  gcm?: shared.AndroidPushNotificationTemplate;

  @Metadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class UpdatePushTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=PushNotificationTemplateRequest" })
  pushNotificationTemplateRequest: UpdatePushTemplateRequestBodyPushNotificationTemplateRequest;
}


export class UpdatePushTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePushTemplatePathParams;

  @Metadata()
  queryParams: UpdatePushTemplateQueryParams;

  @Metadata()
  headers: UpdatePushTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePushTemplateRequestBody;
}


export class UpdatePushTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updatePushTemplateResponse?: shared.UpdatePushTemplateResponse;
}
