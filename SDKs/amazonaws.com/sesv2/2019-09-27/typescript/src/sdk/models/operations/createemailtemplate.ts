import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEmailTemplateHeaders extends SpeakeasyBase {
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


// CreateEmailTemplateRequestBodyTemplateContent
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class CreateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Html" })
  html?: string;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}


export class CreateEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateContent" })
  templateContent: CreateEmailTemplateRequestBodyTemplateContent;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;
}


export class CreateEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEmailTemplateRequestBody;
}


export class CreateEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEmailTemplateResponse?: Map<string, any>;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
