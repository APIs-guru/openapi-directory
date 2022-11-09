import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateActivityXAmzTargetEnum {
    AwsStepFunctionsCreateActivity = "AWSStepFunctions.CreateActivity"
}


export class CreateActivityHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateActivityXAmzTargetEnum;
}


export class CreateActivityRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateActivityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateActivityInput;
}


export class CreateActivityResponse extends SpeakeasyBase {
  @Metadata()
  activityLimitExceeded?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createActivityOutput?: shared.CreateActivityOutput;

  @Metadata()
  invalidName?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTags?: any;
}
