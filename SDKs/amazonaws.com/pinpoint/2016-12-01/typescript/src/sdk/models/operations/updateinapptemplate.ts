import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateInAppTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class UpdateInAppTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=create-new-version" })
  createNewVersion?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class UpdateInAppTemplateHeaders extends SpeakeasyBase {
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


// UpdateInAppTemplateRequestBodyInAppTemplateRequest
/** 
 * InApp Template Request.
**/
export class UpdateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
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


export class UpdateInAppTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InAppTemplateRequest" })
  inAppTemplateRequest: UpdateInAppTemplateRequestBodyInAppTemplateRequest;
}


export class UpdateInAppTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateInAppTemplatePathParams;

  @Metadata()
  queryParams: UpdateInAppTemplateQueryParams;

  @Metadata()
  headers: UpdateInAppTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateInAppTemplateRequestBody;
}


export class UpdateInAppTemplateResponse extends SpeakeasyBase {
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
  updateInAppTemplateResponse?: shared.UpdateInAppTemplateResponse;
}
