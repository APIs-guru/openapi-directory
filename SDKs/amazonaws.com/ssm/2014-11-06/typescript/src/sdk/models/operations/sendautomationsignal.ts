import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SendAutomationSignalXAmzTargetEnum {
    AmazonSsmSendAutomationSignal = "AmazonSSM.SendAutomationSignal"
}


export class SendAutomationSignalHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendAutomationSignalXAmzTargetEnum;
}


export class SendAutomationSignalRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendAutomationSignalHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SendAutomationSignalRequest;
}


export class SendAutomationSignalResponse extends SpeakeasyBase {
  @Metadata()
  automationExecutionNotFoundException?: any;

  @Metadata()
  automationStepNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAutomationSignalException?: any;

  @Metadata()
  sendAutomationSignalResult?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
