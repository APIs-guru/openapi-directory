import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CountPendingDecisionTasksXAmzTargetEnum {
    SimpleWorkflowServiceCountPendingDecisionTasks = "SimpleWorkflowService.CountPendingDecisionTasks"
}


export class CountPendingDecisionTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: CountPendingDecisionTasksXAmzTargetEnum;
}


export class CountPendingDecisionTasksRequest extends SpeakeasyBase {
  @Metadata()
  headers: CountPendingDecisionTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CountPendingDecisionTasksInput;
}


export class CountPendingDecisionTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  pendingTaskCount?: shared.PendingTaskCount;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
