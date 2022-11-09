import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeWorldTemplateHeaders extends SpeakeasyBase {
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


export class DescribeWorldTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template: string;
}


export class DescribeWorldTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeWorldTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeWorldTemplateRequestBody;
}


export class DescribeWorldTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeWorldTemplateResponse?: shared.DescribeWorldTemplateResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
