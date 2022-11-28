import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestRenderEmailTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" })
  templateName: string;
}


export class TestRenderEmailTemplateHeaders extends SpeakeasyBase {
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


export class TestRenderEmailTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TemplateData" })
  templateData: string;
}


export class TestRenderEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestRenderEmailTemplatePathParams;

  @SpeakeasyMetadata()
  headers: TestRenderEmailTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: TestRenderEmailTemplateRequestBody;
}


export class TestRenderEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testRenderEmailTemplateResponse?: shared.TestRenderEmailTemplateResponse;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
