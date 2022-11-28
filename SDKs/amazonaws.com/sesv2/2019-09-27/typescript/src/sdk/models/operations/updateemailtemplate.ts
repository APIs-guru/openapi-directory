import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEmailTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" })
  templateName: string;
}


export class UpdateEmailTemplateHeaders extends SpeakeasyBase {
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


// UpdateEmailTemplateRequestBodyTemplateContent
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class UpdateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}


export class UpdateEmailTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateContent" })
  templateContent: UpdateEmailTemplateRequestBodyTemplateContent;
}


export class UpdateEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEmailTemplatePathParams;

  @SpeakeasyMetadata()
  headers: UpdateEmailTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEmailTemplateRequestBody;
}


export class UpdateEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateEmailTemplateResponse?: Map<string, any>;
}
