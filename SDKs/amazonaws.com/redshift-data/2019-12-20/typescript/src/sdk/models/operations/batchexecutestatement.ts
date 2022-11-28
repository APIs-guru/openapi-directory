import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchExecuteStatementXAmzTargetEnum {
    RedshiftDataBatchExecuteStatement = "RedshiftData.BatchExecuteStatement"
}


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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchExecuteStatementXAmzTargetEnum;
}


export class BatchExecuteStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchExecuteStatementHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchExecuteStatementInput;
}


export class BatchExecuteStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeStatementsExceededException?: any;

  @SpeakeasyMetadata()
  batchExecuteStatementException?: any;

  @SpeakeasyMetadata()
  batchExecuteStatementOutput?: shared.BatchExecuteStatementOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
