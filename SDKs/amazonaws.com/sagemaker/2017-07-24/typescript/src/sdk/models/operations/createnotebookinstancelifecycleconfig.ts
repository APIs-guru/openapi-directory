import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerCreateNotebookInstanceLifecycleConfig = "SageMaker.CreateNotebookInstanceLifecycleConfig"
}


export class CreateNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateNotebookInstanceLifecycleConfigXAmzTargetEnum;
}


export class CreateNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateNotebookInstanceLifecycleConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateNotebookInstanceLifecycleConfigInput;
}


export class CreateNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createNotebookInstanceLifecycleConfigOutput?: shared.CreateNotebookInstanceLifecycleConfigOutput;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
