import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetExecutionHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum GetExecutionHistoryXAmzTargetEnum {
    AwsStepFunctionsGetExecutionHistory = "AWSStepFunctions.GetExecutionHistory"
}


export class GetExecutionHistoryHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetExecutionHistoryXAmzTargetEnum;
}


export class GetExecutionHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExecutionHistoryQueryParams;

  @Metadata()
  headers: GetExecutionHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetExecutionHistoryInput;
}


export class GetExecutionHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  executionDoesNotExist?: any;

  @Metadata()
  getExecutionHistoryOutput?: shared.GetExecutionHistoryOutput;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  invalidToken?: any;

  @Metadata()
  statusCode: number;
}
