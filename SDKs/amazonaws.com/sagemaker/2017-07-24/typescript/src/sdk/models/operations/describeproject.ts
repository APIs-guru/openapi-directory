import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProjectXAmzTargetEnum {
    SageMakerDescribeProject = "SageMaker.DescribeProject"
}


export class DescribeProjectHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProjectXAmzTargetEnum;
}


export class DescribeProjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProjectInput;
}


export class DescribeProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProjectOutput?: shared.DescribeProjectOutput;

  @Metadata()
  statusCode: number;
}
