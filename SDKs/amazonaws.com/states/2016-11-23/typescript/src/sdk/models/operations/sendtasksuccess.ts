import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendTaskSuccessXAmzTargetEnum {
    AwsStepFunctionsSendTaskSuccess = "AWSStepFunctions.SendTaskSuccess"
}


export class SendTaskSuccessHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendTaskSuccessXAmzTargetEnum;
}


export class SendTaskSuccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendTaskSuccessHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendTaskSuccessInput;
}


export class SendTaskSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidOutput?: any;

  @SpeakeasyMetadata()
  invalidToken?: any;

  @SpeakeasyMetadata()
  sendTaskSuccessOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskDoesNotExist?: any;

  @SpeakeasyMetadata()
  taskTimedOut?: any;
}
