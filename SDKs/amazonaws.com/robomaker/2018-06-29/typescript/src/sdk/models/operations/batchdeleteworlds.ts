import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDeleteWorldsHeaders extends SpeakeasyBase {
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


export class BatchDeleteWorldsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=worlds" })
  worlds: string[];
}


export class BatchDeleteWorldsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDeleteWorldsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDeleteWorldsRequestBody;
}


export class BatchDeleteWorldsResponse extends SpeakeasyBase {
  @Metadata()
  batchDeleteWorldsResponse?: shared.BatchDeleteWorldsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
