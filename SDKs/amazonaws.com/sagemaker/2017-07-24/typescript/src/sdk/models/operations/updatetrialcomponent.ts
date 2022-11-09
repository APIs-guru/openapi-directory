import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTrialComponentXAmzTargetEnum {
    SageMakerUpdateTrialComponent = "SageMaker.UpdateTrialComponent"
}


export class UpdateTrialComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateTrialComponentXAmzTargetEnum;
}


export class UpdateTrialComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTrialComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTrialComponentRequest;
}


export class UpdateTrialComponentResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateTrialComponentResponse?: shared.UpdateTrialComponentResponse;
}
