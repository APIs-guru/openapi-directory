import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetActivityTaskXAmzTargetEnum {
    AwsStepFunctionsGetActivityTask = "AWSStepFunctions.GetActivityTask"
}


export class GetActivityTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetActivityTaskXAmzTargetEnum;
}


export class GetActivityTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetActivityTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetActivityTaskInput;
}


export class GetActivityTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityDoesNotExist?: any;

  @SpeakeasyMetadata()
  activityWorkerLimitExceeded?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getActivityTaskOutput?: shared.GetActivityTaskOutput;

  @SpeakeasyMetadata()
  invalidArn?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
