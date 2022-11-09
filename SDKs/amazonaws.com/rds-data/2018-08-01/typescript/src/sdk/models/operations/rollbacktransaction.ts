import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RollbackTransactionHeaders extends SpeakeasyBase {
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


export class RollbackTransactionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=secretArn" })
  secretArn: string;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class RollbackTransactionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RollbackTransactionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RollbackTransactionRequestBody;
}


export class RollbackTransactionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  rollbackTransactionResponse?: shared.RollbackTransactionResponse;

  @Metadata()
  serviceUnavailableError?: any;

  @Metadata()
  statementTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
