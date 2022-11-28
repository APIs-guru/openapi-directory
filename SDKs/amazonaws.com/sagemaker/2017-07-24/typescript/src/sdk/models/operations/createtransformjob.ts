import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateTransformJobXAmzTargetEnum {
    SageMakerCreateTransformJob = "SageMaker.CreateTransformJob"
}


export class CreateTransformJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTransformJobXAmzTargetEnum;
}


export class CreateTransformJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateTransformJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateTransformJobRequest;
}


export class CreateTransformJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTransformJobResponse?: shared.CreateTransformJobResponse;

  @SpeakeasyMetadata()
  resourceInUse?: any;

  @SpeakeasyMetadata()
  resourceLimitExceeded?: any;

  @SpeakeasyMetadata()
  resourceNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
