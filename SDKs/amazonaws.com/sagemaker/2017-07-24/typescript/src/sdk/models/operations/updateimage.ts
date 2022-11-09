import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateImageXAmzTargetEnum {
    SageMakerUpdateImage = "SageMaker.UpdateImage"
}


export class UpdateImageHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateImageXAmzTargetEnum;
}


export class UpdateImageRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateImageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateImageRequest;
}


export class UpdateImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateImageResponse?: shared.UpdateImageResponse;
}
