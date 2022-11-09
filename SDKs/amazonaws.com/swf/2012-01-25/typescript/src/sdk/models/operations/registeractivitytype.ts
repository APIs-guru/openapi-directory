import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceRegisterActivityType = "SimpleWorkflowService.RegisterActivityType"
}


export class RegisterActivityTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterActivityTypeXAmzTargetEnum;
}


export class RegisterActivityTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterActivityTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterActivityTypeInput;
}


export class RegisterActivityTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededFault?: any;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  typeAlreadyExistsFault?: any;

  @Metadata()
  unknownResourceFault?: any;
}
