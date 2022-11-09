import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopAutomationExecutionXAmzTargetEnum {
    AmazonSsmStopAutomationExecution = "AmazonSSM.StopAutomationExecution"
}


export class StopAutomationExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopAutomationExecutionXAmzTargetEnum;
}


export class StopAutomationExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopAutomationExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopAutomationExecutionRequest;
}


export class StopAutomationExecutionResponse extends SpeakeasyBase {
  @Metadata()
  automationExecutionNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAutomationStatusUpdateException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopAutomationExecutionResult?: Map<string, any>;
}
