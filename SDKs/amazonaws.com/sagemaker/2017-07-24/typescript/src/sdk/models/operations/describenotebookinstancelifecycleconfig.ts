import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerDescribeNotebookInstanceLifecycleConfig = "SageMaker.DescribeNotebookInstanceLifecycleConfig"
}


export class DescribeNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum;
}


export class DescribeNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeNotebookInstanceLifecycleConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeNotebookInstanceLifecycleConfigInput;
}


export class DescribeNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeNotebookInstanceLifecycleConfigOutput?: shared.DescribeNotebookInstanceLifecycleConfigOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
