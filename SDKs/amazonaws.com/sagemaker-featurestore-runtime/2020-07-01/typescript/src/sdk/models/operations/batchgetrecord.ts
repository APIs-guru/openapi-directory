import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchGetRecordHeaders extends SpeakeasyBase {
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


export class BatchGetRecordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identifiers", elemType: shared.BatchGetRecordIdentifier })
  identifiers: shared.BatchGetRecordIdentifier[];
}


export class BatchGetRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetRecordHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchGetRecordRequestBody;
}


export class BatchGetRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessForbidden?: any;

  @SpeakeasyMetadata()
  batchGetRecordResponse?: shared.BatchGetRecordResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailure?: any;

  @SpeakeasyMetadata()
  serviceUnavailable?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: any;
}
