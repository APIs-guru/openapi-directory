import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTemplateActiveVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-type" })
  templateType: string;
}


export class UpdateTemplateActiveVersionHeaders extends SpeakeasyBase {
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


// UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest
/** 
 * Specifies which version of a message template to use as the active version of the template.
**/
export class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}


export class UpdateTemplateActiveVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateActiveVersionRequest" })
  templateActiveVersionRequest: UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest;
}


export class UpdateTemplateActiveVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTemplateActiveVersionPathParams;

  @SpeakeasyMetadata()
  headers: UpdateTemplateActiveVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateTemplateActiveVersionRequestBody;
}


export class UpdateTemplateActiveVersionResponse extends SpeakeasyBase {
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
  updateTemplateActiveVersionResponse?: shared.UpdateTemplateActiveVersionResponse;
}
