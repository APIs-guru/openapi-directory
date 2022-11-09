import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTrialComponentXAmzTargetEnum {
    SageMakerCreateTrialComponent = "SageMaker.CreateTrialComponent"
}


export class CreateTrialComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTrialComponentXAmzTargetEnum;
}


export class CreateTrialComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTrialComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTrialComponentRequest;
}


export class CreateTrialComponentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTrialComponentResponse?: shared.CreateTrialComponentResponse;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
