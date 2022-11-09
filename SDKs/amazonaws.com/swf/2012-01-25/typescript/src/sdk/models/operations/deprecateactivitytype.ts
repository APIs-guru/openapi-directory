import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeprecateActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateActivityType = "SimpleWorkflowService.DeprecateActivityType"
}


export class DeprecateActivityTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeprecateActivityTypeXAmzTargetEnum;
}


export class DeprecateActivityTypeRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeprecateActivityTypeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeprecateActivityTypeInput;
}


export class DeprecateActivityTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  typeDeprecatedFault?: any;

  @Metadata()
  unknownResourceFault?: any;
}
