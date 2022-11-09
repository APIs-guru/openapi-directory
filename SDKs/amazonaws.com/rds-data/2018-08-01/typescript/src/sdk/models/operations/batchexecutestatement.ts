import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchExecuteStatementHeaders extends SpeakeasyBase {
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


export class BatchExecuteStatementRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=parameterSets", elemType: shared.SqlParameter, elemDepth: 2 })
  parameterSets?: shared.SqlParameter[][];

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=secretArn" })
  secretArn: string;

  @Metadata({ data: "json, name=sql" })
  sql: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}


export class BatchExecuteStatementRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchExecuteStatementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchExecuteStatementRequestBody;
}


export class BatchExecuteStatementResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  batchExecuteStatementResponse?: shared.BatchExecuteStatementResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  serviceUnavailableError?: any;

  @Metadata()
  statementTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
