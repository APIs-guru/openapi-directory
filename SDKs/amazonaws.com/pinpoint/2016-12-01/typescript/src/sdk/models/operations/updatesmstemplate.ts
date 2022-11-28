import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSmsTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class UpdateSmsTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=create-new-version" })
  createNewVersion?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class UpdateSmsTemplateHeaders extends SpeakeasyBase {
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


// UpdateSmsTemplateRequestBodySmsTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
export class UpdateSmsTemplateRequestBodySmsTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class UpdateSmsTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SMSTemplateRequest" })
  smsTemplateRequest: UpdateSmsTemplateRequestBodySmsTemplateRequest;
}


export class UpdateSmsTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSmsTemplatePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateSmsTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateSmsTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateSmsTemplateRequestBody;
}


export class UpdateSmsTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateSmsTemplateResponse?: shared.UpdateSmsTemplateResponse;
}
