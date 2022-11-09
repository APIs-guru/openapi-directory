import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendCommandXAmzTargetEnum {
    AmazonSsmSendCommand = "AmazonSSM.SendCommand"
}


export class SendCommandHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendCommandXAmzTargetEnum;
}


export class SendCommandRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendCommandHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendCommandRequest;
}


export class SendCommandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateInstanceId?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidDocument?: any;

  @Metadata()
  invalidDocumentVersion?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidNotificationConfig?: any;

  @Metadata()
  invalidOutputFolder?: any;

  @Metadata()
  invalidParameters?: any;

  @Metadata()
  invalidRole?: any;

  @Metadata()
  maxDocumentSizeExceeded?: any;

  @Metadata()
  sendCommandResult?: shared.SendCommandResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedPlatformType?: any;
}
