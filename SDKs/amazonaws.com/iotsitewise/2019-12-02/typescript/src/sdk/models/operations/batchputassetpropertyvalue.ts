import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchPutAssetPropertyValueHeaders extends SpeakeasyBase {
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


export class BatchPutAssetPropertyValueRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.PutAssetPropertyValueEntry })
  entries: shared.PutAssetPropertyValueEntry[];
}


export class BatchPutAssetPropertyValueRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchPutAssetPropertyValueHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchPutAssetPropertyValueRequestBody;
}


export class BatchPutAssetPropertyValueResponse extends SpeakeasyBase {
  @Metadata()
  batchPutAssetPropertyValueResponse?: shared.BatchPutAssetPropertyValueResponse;

  @Metadata()
  conflictingOperationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
