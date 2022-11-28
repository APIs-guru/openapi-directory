import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SendAutomationSignalXAmzTargetEnum {
    AmazonSsmSendAutomationSignal = "AmazonSSM.SendAutomationSignal"
}


export class SendAutomationSignalHeaders extends SpeakeasyBase {
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
  xAmzTarget: SendAutomationSignalXAmzTargetEnum;
}


export class SendAutomationSignalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendAutomationSignalHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SendAutomationSignalRequest;
}


export class SendAutomationSignalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automationExecutionNotFoundException?: any;

  @SpeakeasyMetadata()
  automationStepNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidAutomationSignalException?: any;

  @SpeakeasyMetadata()
  sendAutomationSignalResult?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
