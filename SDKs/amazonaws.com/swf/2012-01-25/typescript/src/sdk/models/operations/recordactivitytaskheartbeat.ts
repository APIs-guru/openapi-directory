import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RecordActivityTaskHeartbeatXAmzTargetEnum {
    SimpleWorkflowServiceRecordActivityTaskHeartbeat = "SimpleWorkflowService.RecordActivityTaskHeartbeat"
}


export class RecordActivityTaskHeartbeatHeaders extends SpeakeasyBase {
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
  xAmzTarget: RecordActivityTaskHeartbeatXAmzTargetEnum;
}


export class RecordActivityTaskHeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RecordActivityTaskHeartbeatHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RecordActivityTaskHeartbeatInput;
}


export class RecordActivityTaskHeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityTaskStatus?: shared.ActivityTaskStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;
}
