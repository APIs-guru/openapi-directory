import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartAutomationExecutionXAmzTargetEnum {
    AmazonSsmStartAutomationExecution = "AmazonSSM.StartAutomationExecution"
}


export class StartAutomationExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartAutomationExecutionXAmzTargetEnum;
}


export class StartAutomationExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartAutomationExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartAutomationExecutionRequest;
}


export class StartAutomationExecutionResponse extends SpeakeasyBase {
  @Metadata()
  automationDefinitionNotFoundException?: any;

  @Metadata()
  automationDefinitionVersionNotFoundException?: any;

  @Metadata()
  automationExecutionLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  idempotentParameterMismatch?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAutomationExecutionParametersException?: any;

  @Metadata()
  invalidTarget?: any;

  @Metadata()
  startAutomationExecutionResult?: shared.StartAutomationExecutionResult;

  @Metadata()
  statusCode: number;
}
