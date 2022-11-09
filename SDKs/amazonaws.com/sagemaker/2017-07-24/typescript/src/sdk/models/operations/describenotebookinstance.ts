import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeNotebookInstanceXAmzTargetEnum {
    SageMakerDescribeNotebookInstance = "SageMaker.DescribeNotebookInstance"
}


export class DescribeNotebookInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeNotebookInstanceXAmzTargetEnum;
}


export class DescribeNotebookInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeNotebookInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeNotebookInstanceInput;
}


export class DescribeNotebookInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeNotebookInstanceOutput?: shared.DescribeNotebookInstanceOutput;

  @Metadata()
  statusCode: number;
}
