import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerDescribeNotebookInstanceLifecycleConfig = "SageMaker.DescribeNotebookInstanceLifecycleConfig"
}


export class DescribeNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum;
}


export class DescribeNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeNotebookInstanceLifecycleConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeNotebookInstanceLifecycleConfigInput;
}


export class DescribeNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeNotebookInstanceLifecycleConfigOutput?: shared.DescribeNotebookInstanceLifecycleConfigOutput;

  @Metadata()
  statusCode: number;
}
