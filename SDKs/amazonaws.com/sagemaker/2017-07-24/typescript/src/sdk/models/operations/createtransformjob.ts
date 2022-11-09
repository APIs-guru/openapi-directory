import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTransformJobXAmzTargetEnum {
    SageMakerCreateTransformJob = "SageMaker.CreateTransformJob"
}


export class CreateTransformJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTransformJobXAmzTargetEnum;
}


export class CreateTransformJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTransformJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTransformJobRequest;
}


export class CreateTransformJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTransformJobResponse?: shared.CreateTransformJobResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
