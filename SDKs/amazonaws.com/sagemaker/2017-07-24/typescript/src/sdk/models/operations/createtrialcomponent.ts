import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateTrialComponentXAmzTargetEnum {
    SageMakerCreateTrialComponent = "SageMaker.CreateTrialComponent"
}


export class CreateTrialComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTrialComponentXAmzTargetEnum;
}


export class CreateTrialComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTrialComponentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateTrialComponentRequest;
}


export class CreateTrialComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTrialComponentResponse?: shared.CreateTrialComponentResponse;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
