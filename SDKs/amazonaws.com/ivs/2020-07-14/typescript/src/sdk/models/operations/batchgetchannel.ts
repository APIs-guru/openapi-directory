import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchGetChannelHeaders extends SpeakeasyBase {
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


export class BatchGetChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arns" })
  arns: string[];
}


export class BatchGetChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchGetChannelRequestBody;
}


export class BatchGetChannelResponse extends SpeakeasyBase {
  @Metadata()
  batchGetChannelResponse?: shared.BatchGetChannelResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
