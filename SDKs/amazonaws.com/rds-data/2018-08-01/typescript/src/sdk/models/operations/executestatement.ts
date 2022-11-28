import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExecuteStatementHeaders extends SpeakeasyBase {
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


// ExecuteStatementRequestBodyResultSetOptions
/** 
 * Options that control how the result set is returned.
**/
export class ExecuteStatementRequestBodyResultSetOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decimalReturnType" })
  decimalReturnType?: shared.DecimalReturnTypeEnum;
}


export class ExecuteStatementRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continueAfterTimeout" })
  continueAfterTimeout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=includeResultMetadata" })
  includeResultMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: shared.SqlParameter })
  parameters?: shared.SqlParameter[];

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=resultSetOptions" })
  resultSetOptions?: ExecuteStatementRequestBodyResultSetOptions;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=secretArn" })
  secretArn: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql: string;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}


export class ExecuteStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExecuteStatementHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ExecuteStatementRequestBody;
}


export class ExecuteStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  executeStatementResponse?: shared.ExecuteStatementResponse;

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
