import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTemplateActiveVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-type" })
  templateType: string;
}


export class UpdateTemplateActiveVersionHeaders extends SpeakeasyBase {
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


// UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest
/** 
 * Specifies which version of a message template to use as the active version of the template.
**/
export class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Version" })
  version?: string;
}


export class UpdateTemplateActiveVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateActiveVersionRequest" })
  templateActiveVersionRequest: UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest;
}


export class UpdateTemplateActiveVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTemplateActiveVersionPathParams;

  @Metadata()
  headers: UpdateTemplateActiveVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTemplateActiveVersionRequestBody;
}


export class UpdateTemplateActiveVersionResponse extends SpeakeasyBase {
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
  updateTemplateActiveVersionResponse?: shared.UpdateTemplateActiveVersionResponse;
}
