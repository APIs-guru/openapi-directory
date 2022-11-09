import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAlgorithmXAmzTargetEnum {
    SageMakerDescribeAlgorithm = "SageMaker.DescribeAlgorithm"
}


export class DescribeAlgorithmHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAlgorithmXAmzTargetEnum;
}


export class DescribeAlgorithmRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAlgorithmHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAlgorithmInput;
}


export class DescribeAlgorithmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAlgorithmOutput?: shared.DescribeAlgorithmOutput;

  @Metadata()
  statusCode: number;
}
