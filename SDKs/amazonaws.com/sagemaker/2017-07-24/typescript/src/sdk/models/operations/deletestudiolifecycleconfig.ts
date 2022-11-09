import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteStudioLifecycleConfigXAmzTargetEnum {
    SageMakerDeleteStudioLifecycleConfig = "SageMaker.DeleteStudioLifecycleConfig"
}


export class DeleteStudioLifecycleConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteStudioLifecycleConfigXAmzTargetEnum;
}


export class DeleteStudioLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteStudioLifecycleConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteStudioLifecycleConfigRequest;
}


export class DeleteStudioLifecycleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceInUse?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
