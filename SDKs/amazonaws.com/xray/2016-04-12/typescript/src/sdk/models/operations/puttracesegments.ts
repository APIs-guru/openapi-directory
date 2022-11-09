import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTraceSegmentsHeaders extends SpeakeasyBase {
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


export class PutTraceSegmentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=TraceSegmentDocuments" })
  traceSegmentDocuments: string[];
}


export class PutTraceSegmentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutTraceSegmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutTraceSegmentsRequestBody;
}


export class PutTraceSegmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  putTraceSegmentsResult?: shared.PutTraceSegmentsResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
