import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartAutomationExecutionXAmzTargetEnum {
    AmazonSsmStartAutomationExecution = "AmazonSSM.StartAutomationExecution"
}


export class StartAutomationExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartAutomationExecutionXAmzTargetEnum;
}


export class StartAutomationExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartAutomationExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartAutomationExecutionRequest;
}


export class StartAutomationExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automationDefinitionNotFoundException?: any;

  @SpeakeasyMetadata()
  automationDefinitionVersionNotFoundException?: any;

  @SpeakeasyMetadata()
  automationExecutionLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  idempotentParameterMismatch?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidAutomationExecutionParametersException?: any;

  @SpeakeasyMetadata()
  invalidTarget?: any;

  @SpeakeasyMetadata()
  startAutomationExecutionResult?: shared.StartAutomationExecutionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
