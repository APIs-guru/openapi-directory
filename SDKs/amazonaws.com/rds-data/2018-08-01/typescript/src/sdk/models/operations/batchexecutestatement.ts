import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchExecuteStatementHeaders extends SpeakeasyBase {
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


export class BatchExecuteStatementRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterSets", elemType: shared.SqlParameter, elemDepth: 2 })
  parameterSets?: shared.SqlParameter[][];

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=secretArn" })
  secretArn: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}


export class BatchExecuteStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchExecuteStatementHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchExecuteStatementRequestBody;
}


export class BatchExecuteStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  batchExecuteStatementResponse?: shared.BatchExecuteStatementResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableError?: any;

  @SpeakeasyMetadata()
  statementTimeoutException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
