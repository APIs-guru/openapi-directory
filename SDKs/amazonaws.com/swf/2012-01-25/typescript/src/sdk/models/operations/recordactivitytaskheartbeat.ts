import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RecordActivityTaskHeartbeatXAmzTargetEnum {
    SimpleWorkflowServiceRecordActivityTaskHeartbeat = "SimpleWorkflowService.RecordActivityTaskHeartbeat"
}


export class RecordActivityTaskHeartbeatHeaders extends SpeakeasyBase {
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
  xAmzTarget: RecordActivityTaskHeartbeatXAmzTargetEnum;
}


export class RecordActivityTaskHeartbeatRequest extends SpeakeasyBase {
  @Metadata()
  headers: RecordActivityTaskHeartbeatHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RecordActivityTaskHeartbeatInput;
}


export class RecordActivityTaskHeartbeatResponse extends SpeakeasyBase {
  @Metadata()
  activityTaskStatus?: shared.ActivityTaskStatus;

  @Metadata()
  contentType: string;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
