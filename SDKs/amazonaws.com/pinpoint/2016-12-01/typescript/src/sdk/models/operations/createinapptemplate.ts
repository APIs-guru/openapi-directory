import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInAppTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateInAppTemplateHeaders extends SpeakeasyBase {
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


// CreateInAppTemplateRequestBodyInAppTemplateRequest
/** 
 * InApp Template Request.
**/
export class CreateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content", elemType: shared.InAppMessageContent })
  content?: shared.InAppMessageContent[];

  @Metadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @Metadata({ data: "json, name=Layout" })
  layout?: shared.LayoutEnum;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateInAppTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InAppTemplateRequest" })
  inAppTemplateRequest: CreateInAppTemplateRequestBodyInAppTemplateRequest;
}


export class CreateInAppTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateInAppTemplatePathParams;

  @Metadata()
  headers: CreateInAppTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateInAppTemplateRequestBody;
}


export class CreateInAppTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createInAppTemplateResponse?: shared.CreateInAppTemplateResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
