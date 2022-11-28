import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendCommandXAmzTargetEnum {
    AmazonSsmSendCommand = "AmazonSSM.SendCommand"
}


export class SendCommandHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendCommandXAmzTargetEnum;
}


export class SendCommandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendCommandHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendCommandRequest;
}


export class SendCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  duplicateInstanceId?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidDocument?: any;

  @SpeakeasyMetadata()
  invalidDocumentVersion?: any;

  @SpeakeasyMetadata()
  invalidInstanceId?: any;

  @SpeakeasyMetadata()
  invalidNotificationConfig?: any;

  @SpeakeasyMetadata()
  invalidOutputFolder?: any;

  @SpeakeasyMetadata()
  invalidParameters?: any;

  @SpeakeasyMetadata()
  invalidRole?: any;

  @SpeakeasyMetadata()
  maxDocumentSizeExceeded?: any;

  @SpeakeasyMetadata()
  sendCommandResult?: shared.SendCommandResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedPlatformType?: any;
}
