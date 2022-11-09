import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CountPendingActivityTasksXAmzTargetEnum {
    SimpleWorkflowServiceCountPendingActivityTasks = "SimpleWorkflowService.CountPendingActivityTasks"
}


export class CountPendingActivityTasksHeaders extends SpeakeasyBase {
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
  xAmzTarget: CountPendingActivityTasksXAmzTargetEnum;
}


export class CountPendingActivityTasksRequest extends SpeakeasyBase {
  @Metadata()
  headers: CountPendingActivityTasksHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CountPendingActivityTasksInput;
}


export class CountPendingActivityTasksResponse extends SpeakeasyBase {
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
