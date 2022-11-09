import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAppImageConfigXAmzTargetEnum {
    SageMakerCreateAppImageConfig = "SageMaker.CreateAppImageConfig"
}


export class CreateAppImageConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateAppImageConfigXAmzTargetEnum;
}


export class CreateAppImageConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateAppImageConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAppImageConfigRequest;
}


export class CreateAppImageConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAppImageConfigResponse?: shared.CreateAppImageConfigResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  statusCode: number;
}
