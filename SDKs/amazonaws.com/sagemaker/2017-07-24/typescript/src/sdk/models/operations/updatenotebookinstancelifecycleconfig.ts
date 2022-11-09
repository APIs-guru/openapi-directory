import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerUpdateNotebookInstanceLifecycleConfig = "SageMaker.UpdateNotebookInstanceLifecycleConfig"
}


export class UpdateNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateNotebookInstanceLifecycleConfigXAmzTargetEnum;
}


export class UpdateNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateNotebookInstanceLifecycleConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateNotebookInstanceLifecycleConfigInput;
}


export class UpdateNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNotebookInstanceLifecycleConfigOutput?: Map<string, any>;
}
