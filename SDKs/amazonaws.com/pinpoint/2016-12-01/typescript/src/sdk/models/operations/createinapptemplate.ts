import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInAppTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateInAppTemplateHeaders extends SpeakeasyBase {
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


// CreateInAppTemplateRequestBodyInAppTemplateRequest
/** 
 * InApp Template Request.
**/
export class CreateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content", elemType: shared.InAppMessageContent })
  content?: shared.InAppMessageContent[];

  @SpeakeasyMetadata({ data: "json, name=CustomConfig" })
  customConfig?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Layout" })
  layout?: shared.LayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateInAppTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InAppTemplateRequest" })
  inAppTemplateRequest: CreateInAppTemplateRequestBodyInAppTemplateRequest;
}


export class CreateInAppTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateInAppTemplatePathParams;

  @SpeakeasyMetadata()
  headers: CreateInAppTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateInAppTemplateRequestBody;
}


export class CreateInAppTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createInAppTemplateResponse?: shared.CreateInAppTemplateResponse;

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
