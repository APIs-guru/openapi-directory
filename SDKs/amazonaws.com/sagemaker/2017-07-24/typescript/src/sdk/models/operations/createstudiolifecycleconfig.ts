import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateStudioLifecycleConfigXAmzTargetEnum {
    SageMakerCreateStudioLifecycleConfig = "SageMaker.CreateStudioLifecycleConfig"
}


export class CreateStudioLifecycleConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateStudioLifecycleConfigXAmzTargetEnum;
}


export class CreateStudioLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateStudioLifecycleConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateStudioLifecycleConfigRequest;
}


export class CreateStudioLifecycleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createStudioLifecycleConfigResponse?: shared.CreateStudioLifecycleConfigResponse;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  statusCode: number;
}
