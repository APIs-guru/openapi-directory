import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTraceGraphQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class GetTraceGraphHeaders extends SpeakeasyBase {
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


export class GetTraceGraphRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TraceIds" })
  traceIds: string[];
}


export class GetTraceGraphRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTraceGraphQueryParams;

  @Metadata()
  headers: GetTraceGraphHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetTraceGraphRequestBody;
}


export class GetTraceGraphResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTraceGraphResult?: shared.GetTraceGraphResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
