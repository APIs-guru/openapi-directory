import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateTrialComponentXAmzTargetEnum {
    SageMakerAssociateTrialComponent = "SageMaker.AssociateTrialComponent"
}


export class AssociateTrialComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateTrialComponentXAmzTargetEnum;
}


export class AssociateTrialComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateTrialComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateTrialComponentRequest;
}


export class AssociateTrialComponentResponse extends SpeakeasyBase {
  @Metadata()
  associateTrialComponentResponse?: shared.AssociateTrialComponentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
