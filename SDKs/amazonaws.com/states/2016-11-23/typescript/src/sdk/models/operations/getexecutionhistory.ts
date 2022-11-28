import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetExecutionHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetExecutionHistoryXAmzTargetEnum {
    AwsStepFunctionsGetExecutionHistory = "AWSStepFunctions.GetExecutionHistory"
}


export class GetExecutionHistoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetExecutionHistoryXAmzTargetEnum;
}


export class GetExecutionHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetExecutionHistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetExecutionHistoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetExecutionHistoryInput;
}


export class GetExecutionHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  executionDoesNotExist?: any;

  @SpeakeasyMetadata()
  getExecutionHistoryOutput?: shared.GetExecutionHistoryOutput;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  invalidToken?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
