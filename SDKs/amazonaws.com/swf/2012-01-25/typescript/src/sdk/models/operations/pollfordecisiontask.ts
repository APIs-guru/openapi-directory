import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PollForDecisionTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maximumPageSize" })
  maximumPageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextPageToken" })
  nextPageToken?: string;
}

export enum PollForDecisionTaskXAmzTargetEnum {
    SimpleWorkflowServicePollForDecisionTask = "SimpleWorkflowService.PollForDecisionTask"
}


export class PollForDecisionTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: PollForDecisionTaskXAmzTargetEnum;
}


export class PollForDecisionTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PollForDecisionTaskQueryParams;

  @SpeakeasyMetadata()
  headers: PollForDecisionTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PollForDecisionTaskInput;
}


export class PollForDecisionTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  decisionTask?: shared.DecisionTask;

  @SpeakeasyMetadata()
  limitExceededFault?: any;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;
}
