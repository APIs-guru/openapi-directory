import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInsightHeaders extends SpeakeasyBase {
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


export class GetInsightRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightId" })
  insightId: string;
}


export class GetInsightRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetInsightHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetInsightRequestBody;
}


export class GetInsightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInsightResult?: shared.GetInsightResult;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
