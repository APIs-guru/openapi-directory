import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestRenderEmailTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" })
  templateName: string;
}


export class TestRenderEmailTemplateHeaders extends SpeakeasyBase {
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


export class TestRenderEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=TemplateData" })
  templateData: string;
}


export class TestRenderEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestRenderEmailTemplatePathParams;

  @Metadata()
  headers: TestRenderEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TestRenderEmailTemplateRequestBody;
}


export class TestRenderEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testRenderEmailTemplateResponse?: shared.TestRenderEmailTemplateResponse;

  @Metadata()
  tooManyRequestsException?: any;
}
