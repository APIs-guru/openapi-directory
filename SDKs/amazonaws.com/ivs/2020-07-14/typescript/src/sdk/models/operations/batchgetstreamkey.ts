import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchGetStreamKeyHeaders extends SpeakeasyBase {
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


export class BatchGetStreamKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=arns" })
  arns: string[];
}


export class BatchGetStreamKeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetStreamKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchGetStreamKeyRequestBody;
}


export class BatchGetStreamKeyResponse extends SpeakeasyBase {
  @Metadata()
  batchGetStreamKeyResponse?: shared.BatchGetStreamKeyResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
