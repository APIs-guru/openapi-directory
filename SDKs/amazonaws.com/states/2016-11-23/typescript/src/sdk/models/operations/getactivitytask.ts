import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetActivityTaskXAmzTargetEnum {
    AwsStepFunctionsGetActivityTask = "AWSStepFunctions.GetActivityTask"
}


export class GetActivityTaskHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetActivityTaskXAmzTargetEnum;
}


export class GetActivityTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetActivityTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetActivityTaskInput;
}


export class GetActivityTaskResponse extends SpeakeasyBase {
  @Metadata()
  activityDoesNotExist?: any;

  @Metadata()
  activityWorkerLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getActivityTaskOutput?: shared.GetActivityTaskOutput;

  @Metadata()
  invalidArn?: any;

  @Metadata()
  statusCode: number;
}
