import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchPutAssetPropertyValueHeaders extends SpeakeasyBase {
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


export class BatchPutAssetPropertyValueRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: shared.PutAssetPropertyValueEntry })
  entries: shared.PutAssetPropertyValueEntry[];
}


export class BatchPutAssetPropertyValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchPutAssetPropertyValueHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchPutAssetPropertyValueRequestBody;
}


export class BatchPutAssetPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchPutAssetPropertyValueResponse?: shared.BatchPutAssetPropertyValueResponse;

  @SpeakeasyMetadata()
  conflictingOperationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
