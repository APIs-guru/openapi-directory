import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEmailTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" })
  templateName: string;
}


export class UpdateEmailTemplateHeaders extends SpeakeasyBase {
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


// UpdateEmailTemplateRequestBodyTemplateContent
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class UpdateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Html" })
  html?: string;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}


export class UpdateEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateContent" })
  templateContent: UpdateEmailTemplateRequestBodyTemplateContent;
}


export class UpdateEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmailTemplatePathParams;

  @Metadata()
  headers: UpdateEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEmailTemplateRequestBody;
}


export class UpdateEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateEmailTemplateResponse?: Map<string, any>;
}
