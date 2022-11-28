import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateInAppTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class UpdateInAppTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=create-new-version" })
  createNewVersion?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class UpdateInAppTemplateHeaders extends SpeakeasyBase {
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


// UpdateInAppTemplateRequestBodyInAppTemplateRequest
/** 
 * InApp Template Request.
**/
export class UpdateInAppTemplateRequestBodyInAppTemplateRequest extends SpeakeasyBase {
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


export class UpdateInAppTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InAppTemplateRequest" })
  inAppTemplateRequest: UpdateInAppTemplateRequestBodyInAppTemplateRequest;
}


export class UpdateInAppTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateInAppTemplatePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateInAppTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateInAppTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateInAppTemplateRequestBody;
}


export class UpdateInAppTemplateResponse extends SpeakeasyBase {
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
  updateInAppTemplateResponse?: shared.UpdateInAppTemplateResponse;
}
