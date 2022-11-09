import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendTaskSuccessXAmzTargetEnum {
    AwsStepFunctionsSendTaskSuccess = "AWSStepFunctions.SendTaskSuccess"
}


export class SendTaskSuccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendTaskSuccessXAmzTargetEnum;
}


export class SendTaskSuccessRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendTaskSuccessHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendTaskSuccessInput;
}


export class SendTaskSuccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidOutput?: any;

  @Metadata()
  invalidToken?: any;

  @Metadata()
  sendTaskSuccessOutput?: Map<string, any>;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskDoesNotExist?: any;

  @Metadata()
  taskTimedOut?: any;
}
