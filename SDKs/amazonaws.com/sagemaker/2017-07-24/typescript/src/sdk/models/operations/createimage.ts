import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateImageXAmzTargetEnum {
    SageMakerCreateImage = "SageMaker.CreateImage"
}


export class CreateImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateImageXAmzTargetEnum;
}


export class CreateImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateImageRequest;
}


export class CreateImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createImageResponse?: shared.CreateImageResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
