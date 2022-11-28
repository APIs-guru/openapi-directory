import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartChangeRequestExecutionXAmzTargetEnum {
    AmazonSsmStartChangeRequestExecution = "AmazonSSM.StartChangeRequestExecution"
}


export class StartChangeRequestExecutionHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartChangeRequestExecutionXAmzTargetEnum;
}


export class StartChangeRequestExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartChangeRequestExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartChangeRequestExecutionRequest;
}


export class StartChangeRequestExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automationDefinitionNotApprovedException?: any;

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
  startChangeRequestExecutionResult?: shared.StartChangeRequestExecutionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
