import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchGetStreamKeyHeaders extends SpeakeasyBase {
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


export class BatchGetStreamKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arns" })
  arns: string[];
}


export class BatchGetStreamKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetStreamKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchGetStreamKeyRequestBody;
}


export class BatchGetStreamKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetStreamKeyResponse?: shared.BatchGetStreamKeyResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
