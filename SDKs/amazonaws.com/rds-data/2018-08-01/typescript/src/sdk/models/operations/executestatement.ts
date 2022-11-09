import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExecuteStatementHeaders extends SpeakeasyBase {
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


// ExecuteStatementRequestBodyResultSetOptions
/** 
 * Options that control how the result set is returned.
**/
export class ExecuteStatementRequestBodyResultSetOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=decimalReturnType" })
  decimalReturnType?: shared.DecimalReturnTypeEnum;
}


export class ExecuteStatementRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=continueAfterTimeout" })
  continueAfterTimeout?: boolean;

  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=includeResultMetadata" })
  includeResultMetadata?: boolean;

  @Metadata({ data: "json, name=parameters", elemType: shared.SqlParameter })
  parameters?: shared.SqlParameter[];

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=resultSetOptions" })
  resultSetOptions?: ExecuteStatementRequestBodyResultSetOptions;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=secretArn" })
  secretArn: string;

  @Metadata({ data: "json, name=sql" })
  sql: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}


export class ExecuteStatementRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExecuteStatementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ExecuteStatementRequestBody;
}


export class ExecuteStatementResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  executeStatementResponse?: shared.ExecuteStatementResponse;

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
