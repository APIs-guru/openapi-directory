import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PollForDecisionTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" })
  maximumPageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" })
  nextPageToken?: string;
}

export enum PollForDecisionTaskXAmzTargetEnum {
    SimpleWorkflowServicePollForDecisionTask = "SimpleWorkflowService.PollForDecisionTask"
}


export class PollForDecisionTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: PollForDecisionTaskXAmzTargetEnum;
}


export class PollForDecisionTaskRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PollForDecisionTaskQueryParams;

  @Metadata()
  headers: PollForDecisionTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PollForDecisionTaskInput;
}


export class PollForDecisionTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  decisionTask?: shared.DecisionTask;

  @Metadata()
  limitExceededFault?: any;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
