import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartChangeRequestExecutionXAmzTargetEnum {
    AmazonSsmStartChangeRequestExecution = "AmazonSSM.StartChangeRequestExecution"
}


export class StartChangeRequestExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartChangeRequestExecutionXAmzTargetEnum;
}


export class StartChangeRequestExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartChangeRequestExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartChangeRequestExecutionRequest;
}


export class StartChangeRequestExecutionResponse extends SpeakeasyBase {
  @Metadata()
  automationDefinitionNotApprovedException?: any;

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
  startChangeRequestExecutionResult?: shared.StartChangeRequestExecutionResult;

  @Metadata()
  statusCode: number;
}
